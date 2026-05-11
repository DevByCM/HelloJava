from typing import Optional
from datetime import datetime
from pydantic import BaseModel

class MatchBase(BaseModel):
    external_id: str
    home_team: str
    away_team: str
    league: str
    match_date: datetime
    status: str
    home_score: Optional[int] = None
    away_score: Optional[int] = None

class MatchCreate(MatchBase):
    pass

class MatchUpdate(MatchBase):
    external_id: Optional[str] = None
    home_team: Optional[str] = None
    away_team: Optional[str] = None
    league: Optional[str] = None
    match_date: Optional[datetime] = None
    status: Optional[str] = None

class MatchInDBBase(MatchBase):
    id: int

    class Config:
        from_attributes = True

class Match(MatchInDBBase):
    pass
