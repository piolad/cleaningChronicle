from flask import Flask, request, render_template

app = Flask(__name__)


#members api route
@app.route('/members')
def members():
    return {'members': ['Member1', 'Member2', 'Member3']}

@app.route('/')
def index():
    # return the index.html staic page from a different folder
    return render_template('index.html')
    

if __name__ == '__main__':
    app.run(debug=True)

