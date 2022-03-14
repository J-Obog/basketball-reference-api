from flask import Blueprint
from bbref.api.players import router as players_router
from bbref.api.teams import router as teams_router
from bbref.api.leagues import router as leagues_router

router: Blueprint = Blueprint('mux', __name__)
router.register_blueprint(players_router, url_prefix='/players')
router.register_blueprint(teams_router, url_prefix='/teams')
router.register_blueprint(leagues_router, url_prefix='/leagues')