from flask import Flask
from flask import render_template
import sys

app = Flask(__name__)


@app.route('/')
def main():
#    print('Hello world!', file=sys.stderr)<
    return render_template('index.html')

@app.route('/project')
def project():
    return render_template('/project/project.html')

@app.route('/project/cv')
def cv():
    return render_template('project/CV/index.php')

@app.route('/project/newsAPI')
def newsapi():
    return render_template('project/newsAPI/index.html')

@app.route('/project/meteoAPI')
def meteoapi():
    return render_template('project/meteoAPI/ajax.html')

if __name__ == '__main__':
    app.debug = True
    app.run(host="0.0.0.0", port=80, debug=True)