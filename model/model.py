from transformers import AutoTokenizer
import pickle
checkpoint = 'sshleifer/distilbart-cnn-12-6'

tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSeq2SeqLM.from_pretrained(checkpoint)

pickle.dump(model,open('model.pkl', 'wb'))