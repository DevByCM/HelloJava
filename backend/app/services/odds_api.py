import requests
import os
from typing import List, Dict, Any

class OddsApiService:
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.getenv("ODDS_API_KEY")
        self.base_url = "https://api.the-odds-api.com/v4/sports"

    def get_odds(self, sport: str = "soccer_europe_uefa_champions_league", regions: str = "eu") -> List[Dict[str, Any]]:
        if not self.api_key:
            return []
        url = f"{self.base_url}/{sport}/odds"
        params = {
            "apiKey": self.api_key,
            "regions": regions,
            "markets": "h2h,totals",
            "oddsFormat": "decimal"
        }
        response = requests.get(url, params=params)
        if response.status_code == 200:
            return response.json()
        return []
