from pandas.core.algorithms import isin
import streamlit as st
import pandas as pd
import numpy as np
from PIL import Image
from streamlit.elements.arrow import Data

image = Image.open(
    "C:/Users/Ahmed/Desktop/Training's projects/Projects/SE-Pharmacy//pharmacylogo.png"
)
image1 = Image.open(
    "C:/Users/Ahmed/Desktop/Training's projects/Projects/SE-Pharmacy//redNumber.jpg"
)
data = pd.DataFrame(
    {
        "Id": ["1", "2", "3", "4", "5", "admin"],
        "Name": ["Ahmed", "Mohamed", "Salman", "Omar", "Attia", "admin"],
        "Address": [
            "sediBishr",
            "sediGaber",
            "Seyouf",
            "Smouha",
            "Mandarah",
            "Unknown",
        ],
        "Phone_Number": [
            "01056164868",
            "01255516516",
            "01223156648",
            "01095555115",
            "01226123668",
            "0114444555",
        ],
        "Date-Of-Birth": [
            "15/10/1950",
            "20/10/1951",
            "25/10/1952",
            "3/3/1963",
            "12/5/1983",
            "30/11/1977",
        ],
        "Salary": [100, 150, 200, 300, 500, 550],
        "Years-of-Experience": [1, 2, 3, 2, 2, 4],
        "Date-of-Hiring": [
            "1/5/2018",
            "2/6/2017",
            "3/7/2016",
            "10/9/2015",
            "25/11/2019",
            "14/12/2019",
        ],
        "Specialization": [
            "Pharmeceutical",
            "Accounting",
            "Delivery",
            "Staff",
            "Staff",
            "Manager",
        ],
    }
)
Nav = st.sidebar.radio("Navigation", ["Log In Page", "Log Out"])
if Nav == "Log In Page":
    f, s = st.columns(2)
    f.title("PHARMACY")
    s.image(image, caption="Pharmacy Logo", width=50)
    N = st.text_input("Please Enter Your Name")
    P = st.text_input("Please Enter Your Id")
    t, tt = st.columns(2)
    logging_in = t.button("LOG IN")
    tt.image(image1, caption="Pharmacy Number", width=150)
    if (data["Name"] == N).any() == True:
        if (data["Id"] == P).any() == True:
            if logging_in:
                st.success("Log in Successful")
            if logging_in:
                st.success("Welcome Thanks For Logging in")
        else:
            if logging_in:
                st.success("Wrong ID please Enter the correct ID !!")
    else:
        if logging_in:
            st.success("Wrong Entry !!")
if Nav == "Log Out":
    first, second = st.columns(2)
    first.title("PHARMACY")
    t, tt = st.columns(2)
    logging_out = t.button("LOG Out")
    tt.image(image1, caption="Pharmacy Number", width=150)
    if logging_out:
        st.success("Thanks For Visiting")
    second.image(image, caption="Pharmacy Logo", width=50)
