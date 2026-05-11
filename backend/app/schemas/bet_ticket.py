from typing import List, Dict, Any, Optional
from datetime import datetime
from pydantic import BaseModel

class BetPick(BaseModel):
    match_id: int
    home_team: str
    away_team: str
    market: str
    prediction: str
    odds: float
    confidence: float

class BetTicketBase(BaseModel):
    total_odds: float
    is_premium: bool = False
    picks: List[BetPick]

class BetTicketCreate(BetTicketBase):
    pass

class BetTicketInDBBase(BetTicketBase):
    id: int
    created_at: datetime
    status: str

    class Config:
        from_attributes = True

class BetTicket(BetTicketInDBBase):
    pass
