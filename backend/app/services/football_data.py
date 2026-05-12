import requests
from typing import List, Dict, Any
from app.core.config import settings

class FootballDataService:
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.getenv("FOOTBALL_DATA_API_KEY")
        self.base_url = "https://api.football-data.org/v4"
        self.headers = {"X-Auth-Token": self.api_key} if self.api_key else {}

    def get_matches(self, date_from: str, date_to: str) -> List[Dict[str, Any]]:
        url = f"{self.base_url}/matches"
        params = {"dateFrom": date_from, "dateTo": date_to}
        response = requests.get(url, headers=self.headers, params=params)
        if response.status_code == 200:
            return response.json().get("matches", [])
        return []

    def get_standings(self, league_code: str) -> Dict[str, Any]:
        url = f"{self.base_url}/competitions/{league_code}/standings"
        response = requests.get(url, headers=self.headers)
        if response.status_code == 200:
            return response.json()
        return {}

import os
