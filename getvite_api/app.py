from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'This is flask with docker after an update to app, test 3, reload cool'
