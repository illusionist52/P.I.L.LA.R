import numpy as np
import pickle
from transformers import AutoTokenizer
from flask import Flask, request, jsonify, render_template
from docx import Document
import nltk

checkpoint = 'sshleifer/distilbart-cnn-12-6'


nltk.download('punkt')
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

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

    doc = Document(file)

    doc_text = ""


    for paragraph in doc.paragraphs:
        doc_text += paragraph.text + "\n"

    sentences = nltk.tokenize.sent_tokenize(doc_text) 

    length = 0
    chunk = ''
    chunks = []
    count = -1

    for sentence in sentences:
      count += 1
      combined_length = len(tokenizer.tokenize(sentence)) + length

      if combined_length <= tokenizer.max_len_single_sentence:
        chunk += sentence + " "
        length = combined_length

        if count == len(sentences) -1:
          chunks.append(chunk.strip())

      else:
        chunks.append(chunk.strip())

        length = 0
        chunk = ''

        chunk += sentence + " "
        length = len(tokenizer.tokenize(sentence))

    inputs = [tokenizer(chunk, return_tensors = 'pt') for chunk in chunks ]

    for input in inputs:
      output =model.generate(**input)
      summary = tokenizer.decode(*output,skip_special_tokens=True)
      # print(tokenizer.decode(*output,skip_special_tokens=True))

    return output

if __name__ == '__main__':


    # Start Flask development server
  app.run(debug=True)
 