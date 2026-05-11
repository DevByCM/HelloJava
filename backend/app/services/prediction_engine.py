from sqlalchemy.orm import Session
from app.models.match import Match
from app.models.prediction import Prediction
from app.ml.base_model import BaselineFootballModel
from typing import List

class PredictionEngine:
    def __init__(self, db: Session):
        self.db = db
        self.model = BaselineFootballModel()

    def generate_predictions_for_upcoming(self):
        matches = self.db.query(Match).filter(Match.status == "TIMED").all()
        for match in matches:
            # Mocking average goals for baseline
            # In production, these would come from historical stats ETL
            home_avg = 1.6
            away_avg = 1.2

            probs = self.model.predict_match(home_avg, away_avg)

            # Find best market
            best_market = "1X2"
            best_val = "1"
            max_conf = probs["1"]

            if probs["O2.5"] > max_conf:
                best_market = "O/U 2.5"
                best_val = "Over"
                max_conf = probs["O2.5"]

            prediction = Prediction(
                match_id=match.id,
                market=best_market,
                prediction_value=best_val,
                confidence_score=max_conf * 100,
                probabilities=probs,
                reasoning=f"Based on baseline Poisson model with lambda_h={home_avg}, lambda_a={away_avg}"
            )
            self.db.add(prediction)
        self.db.commit()
