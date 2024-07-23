import streamlit as st
from langchain_community.embeddings import SentenceTransformerEmbeddings
from langchain_community.vectorstores import FAISS

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate
from langchain.chains import RetrievalQA
import os

GOOGLE_API_KEY = 'AIzaSyALFEECpmout3WHxKamZrXyeGTVD-yOnB0'

print("No errrr")