from sqlalchemy.orm import Session
from app.models.prediction import Prediction
from app.models.match import Match
from app.models.bet_ticket import BetTicket
from typing import List

class TicketGenerator:
    def __init__(self, db: Session):
        self.db = db

    def create_daily_ticket(self, target_odds: float = 2.0, is_premium: bool = False):
        # Fetch high confidence predictions
        predictions = self.db.query(Prediction, Match).join(Match).filter(
            Prediction.confidence_score > 75
        ).order_by(Prediction.confidence_score.desc()).limit(10).all()

        picks = []
        current_odds = 1.0

        for pred, match in predictions:
            if current_odds >= target_odds:
                break

            # Mocking odds for the example
            # In production, these come from OddsApiService
            market_odds = 1.45

            picks.append({
                "match_id": match.id,
                "home_team": match.home_team,
                "away_team": match.away_team,
                "market": pred.market,
                "prediction": pred.prediction_value,
                "odds": market_odds,
                "confidence": pred.confidence_score
            })
            current_odds *= market_odds

        if picks:
            ticket = BetTicket(
                total_odds=round(current_odds, 2),
                is_premium=is_premium,
                picks=picks,
                status="pending"
            )
            self.db.add(ticket)
            self.db.commit()
            return ticket
        return None
