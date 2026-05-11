from typing import Optional, Dict, Any
from pydantic import BaseModel

class PredictionBase(BaseModel):
    match_id: int
    market: str
    prediction_value: str
    confidence_score: float
    probabilities: Optional[Dict[str, float]] = None
    reasoning: Optional[str] = None

class PredictionCreate(PredictionBase):
    pass

class PredictionInDBBase(PredictionBase):
    id: int

    class Config:
        from_attributes = True

class Prediction(PredictionInDBBase):
    pass
