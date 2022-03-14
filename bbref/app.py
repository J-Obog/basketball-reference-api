from flask import Flask
from waitress import serve
from dotenv import load_dotenv
from bbref.utils.log import logger
import os

def create_app():
    app = Flask(__name__)
    return app

if __name__ == '__main__':
    load_dotenv(override=True)
    app = create_app()
    host = os.getenv('APP_HOST')
    port = os.getenv('APP_PORT')
    logger.info(f'Server running on {host}:{port} ...')
    serve(app, host=host, port=port)