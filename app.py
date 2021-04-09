from flask import Flask
from flask import render_template
import sys

app = Flask(__name__)


@app.route('/')
def main():
#    print('Hello world!', file=sys.stderr)<
    return render_template('index.html')

@app.route('/test')
def test():
#    print('Hello world!', file=sys.stderr)<
    return render_template('test.html')

if __name__ == '__main__':
    app.debug = True
    app.run(debug=True)