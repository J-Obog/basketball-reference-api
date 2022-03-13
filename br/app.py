from flask import Flask
from waitress import serve
from dotenv import load_dotenv
import logging
import os

def create_app():
    app = Flask(__name__)
    return app

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG, format='%(asctime)s %(levelname)s [%(name)s] -- %(message)s')
    load_dotenv(override=True)
    app = create_app()
    host = os.getenv('APP_HOST')
    port = os.getenv('APP_PORT')
    serve(app, host=host, port=port)