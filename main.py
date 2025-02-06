from flask import Flask
from flask import render_template, request, jsonify
import os


app = Flask("onlylea.vip")


def files(path):
    dir = []
    for file in os.listdir(path):
        if os.path.isfile(os.path.join(path, file)):
            dir.append(file)
    return dir


@app.route('/api/images')
def content_files():

    image_dirs = []
    image_files = []

    for i in os.listdir('static/src/'):
        fp = os.getcwd() + '/static/src/' + i
        if os.path.isdir(fp):
            image_dirs.append(fp)

    for dir in image_dirs:
        image_files.append(files(dir))

    return jsonify(image_files)


@app.route('/api/sections')
def content_sections():

    image_dirs = []

    for i in os.listdir('static/src/'):
        fp = os.getcwd() + '/static/src/' + i
        if os.path.isdir(fp):
            dir = fp.split('/')[-1]
            image_dirs.append(dir)

    return jsonify(image_dirs)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run()
