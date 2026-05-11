from sqlalchemy.orm import Session
from app.models.match import Match
from app.services.football_data import FootballDataService
from datetime import datetime

class ETLService:
    def __init__(self, db: Session):
        self.db = db
        self.api_service = FootballDataService()

    def sync_upcoming_matches(self, date_from: str, date_to: str):
        matches_data = self.api_service.get_matches(date_from, date_to)
        for m in matches_data:
            match = self.db.query(Match).filter(Match.external_id == str(m['id'])).first()
            if not match:
                match = Match(
                    external_id=str(m['id']),
                    home_team=m['homeTeam']['name'],
                    away_team=m['awayTeam']['name'],
                    league=m['competition']['name'],
                    match_date=datetime.fromisoformat(m['utcDate'].replace('Z', '+00:00')),
                    status=m['status']
                )
                self.db.add(match)
            else:
                match.status = m['status']
                if m.get('score'):
                    match.home_score = m['score']['fullTime']['home']
                    match.away_score = m['score']['fullTime']['away']
        self.db.commit()
