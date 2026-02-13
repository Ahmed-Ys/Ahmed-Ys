import pickle
import numpy as np
import nltk
from nltk.corpus import stopwords 
nltk.download('stopwords')
nltk.download('wordnet')
from nltk.stem import SnowballStemmer, WordNetLemmatizer
stop_words = set(stopwords.words('english'))
stop_words.remove('not')
stop_words.remove('no')
stemmer = SnowballStemmer("english")
lemmatizer= WordNetLemmatizer()
model_name = 'rf_model.pk'
vectorizer_name = 'tfidf_vectorizer.pk'
loaded_model = pickle.load(open(model_name,'rb'))
loaded_vect = pickle.load(open(vectorizer_name,'rb'))
def raw_test(review, model, vectorizer):
    lemmatized_word = lemmatizer.lemmatize(review)
    stemmed_word = stemmer.stem(lemmatized_word) 
    filtered_words = [word for word in stemmed_word.split() if word not in stopwords.words('english')]
    embedding = vectorizer.transform(filtered_words)
    predict = model.predict(embedding)
    ZC = np.count_nonzero(predict==0)
    if ZC < 2:
        prediction = 1
    else:
        prediction = 0
    return "Positive" if prediction == 1 else "Negative"
import streamlit as st
def main():
    st.title("Amazon Food Review")
    message = st.text_area("Enter Your Review","Type Here")
    if st.button("Analyze"):
        result = raw_test(message, loaded_model, loaded_vect)
        st.success(result)
if __name__=='__main__':
    main()