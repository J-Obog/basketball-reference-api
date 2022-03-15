from flask import Flask
from waitress import serve
from dotenv import load_dotenv
from bbref.utils.log import logger
import os

def create_app():
    app: Flask = Flask(__name__)

    from bbref.api.mux import router as api_router
    app.register_blueprint(api_router, url_prefix='/api')

    return app

if __name__ == '__main__':
    load_dotenv(override=True)
    app: Flask = create_app()
    host: str = os.getenv('APP_HOST')
    port: int = int(os.getenv('APP_PORT'))
    logger.info(f'Server running on {host}:{port} ...')
    serve(app, host=host, port=port)