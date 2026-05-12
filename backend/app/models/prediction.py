from sqlalchemy import Column, Integer, String, Float, ForeignKey, JSON
from app.db.session import Base

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    match_id = Column(Integer, ForeignKey("matches.id"))
    market = Column(String) # e.g., "1X2", "O/U 2.5", "BTTS"
    prediction_value = Column(String)
    confidence_score = Column(Float)
    probabilities = Column(JSON) # Store raw probabilities
    reasoning = Column(String)
