from flask import Flask
from waitress import serve
from dotenv import load_dotenv
from bbref.utils.log import logger
from bbref.api.mux import router as api_router
import os

def create_app():
    app = Flask(__name__)
    app.register_blueprint(api_router, url_prefix='/api')

    return app

if __name__ == '__main__':
    load_dotenv(override=True)
    app = create_app()
    host = os.getenv('APP_HOST')
    port = os.getenv('APP_PORT')
    logger.info(f'Server running on {host}:{port} ...')
    serve(app, host=host, port=port)