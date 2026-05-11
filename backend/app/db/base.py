# Import all the models, so that Base has them before being
# imported by Alembic
from app.db.session import Base
from app.models.user import User
from app.models.match import Match
from app.models.prediction import Prediction
from app.models.bet_ticket import BetTicket
