from sqlalchemy import Column, Integer, String, DateTime, Float, ForeignKey
from app.db.session import Base

class Match(Base):
    __tablename__ = "matches"

    id = Column(Integer, primary_key=True, index=True)
    external_id = Column(String, unique=True, index=True)
    home_team = Column(String, index=True)
    away_team = Column(String, index=True)
    league = Column(String, index=True)
    match_date = Column(DateTime)
    status = Column(String)
    home_score = Column(Integer, nullable=True)
    away_score = Column(Integer, nullable=True)
