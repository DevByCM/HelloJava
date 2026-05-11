from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, JSON, ForeignKey
from sqlalchemy.orm import relationship
from app.db.session import Base
from datetime import datetime

class BetTicket(Base):
    __tablename__ = "bet_tickets"

    id = Column(Integer, primary_key=True, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    total_odds = Column(Float)
    is_premium = Column(Boolean, default=False)
    status = Column(String, default="pending") # pending, won, lost
    picks = Column(JSON) # List of picks with match details and prediction
