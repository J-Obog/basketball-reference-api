from flask import Flask
from waitress import serve

def create_app():
    app = Flask(__name__)
    return app

if __name__ == '__main__':
    app = create_app()
    HOST = '127.0.0.1'
    PORT = 8055
    print(f'Server running on {HOST}:{PORT}')
    serve(app, host=HOST, port=PORT)