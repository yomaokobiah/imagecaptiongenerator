import numpy as np
from utils import *
import base64

# # Keras
from keras.preprocessing.image import  img_to_array


# Flask utils
from flask import Flask, url_for, render_template, request,send_from_directory,redirect
from werkzeug.utils import secure_filename
import cv2



app = Flask(__name__)
app.debug = True

@app.route("/")
@app.route('/home')
def index():
    return render_template("index.html")


@app.route('/team')
def team():
    return render_template("team.html")


@app.route('/about')
def about():
    return render_template("about.html")


@app.route("/generateCaption", methods=["POST"])
def generateCaption():
    image = request.files['image']
    test_img = get_encoding(resnet, image)
    Argmax_Search = predict_captions(test_img)

    # caption = "Cute cat for Erwin Schrodinger"
    return render_template("results.html", image=jpg_as_text, Argmax_Search=Argmax_Search)




if __name__ == "__main__":
    app.run()
