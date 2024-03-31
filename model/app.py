from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts.prompt import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from PyPDF2 import PdfReader
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import fitz


def get_pdf_text(file):
    doc = fitz.open(file)
    text = ""
    for page_number in range(len(doc)):
        page = doc.load_page(page_number)
        text += page.get_text()
    return text


def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(text)
    return chunks

def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001",google_api_key="AIzaSyBQ3E2hbjxuM45LFsRTmIplYJAcC1Qmk9w")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index.pickle")
    return vector_store, embeddings

def get_conversational_chain():

    prompt_template = """
    Answer the question as detailed as possible from the provided context, make sure to provide all the details, if the answer is not in
    provided context just say, "i couldn't find an answer to your question in the agreement ", don't provide the wrong answer\n\n
    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.3,google_api_key="AIzaSyBQ3E2hbjxuM45LFsRTmIplYJAcC1Qmk9w")

    prompt = PromptTemplate(template = prompt_template, input_variables = ["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)
    return chain

def questionanswered(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001",google_api_key="AIzaSyBQ3E2hbjxuM45LFsRTmIplYJAcC1Qmk9w")
    new_db = FAISS.load_local("faiss_index.pickle", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(user_question)
    chain = get_conversational_chain()
    response = chain({"input_documents": docs, "question": user_question}, return_only_outputs=True)
    return response

app = Flask(__name__)
CORS(app)
CORS(app, origins='http://localhost:3000')


@app.route('/')
def home():
    return 'Welcome to the File Upload API'

@app.route('/upload', methods=['POST'])
def upload_file():
    
    if 'file' not in request.files:
        return 'No file part in the request'

    file = request.files['file']

    
    if file.filename == '':
        return 'No selected file'

    print(file)
    text = get_pdf_text(file.filename)
    chunks = get_text_chunks(text)
    print(chunks)
    vstore, embeddings = get_vector_store(chunks)
    summary = questionanswered("give me a summary of the document")
    effective_date = questionanswered("state the period of agreement")
    participants = questionanswered("state the owner and the rentee")

    print(summary)
    data = {
        "summary": summary,
        "date":effective_date,
        "participants":participants
    }
    return jsonify(data)
    



    

if __name__ == '__main__':


    # Start Flask development server
  app.run()