import pandas as pd
import numpy as np
from typing import Dict, Any

class BaselineFootballModel:
    """
    A baseline model using Poisson distribution for goal prediction.
    """
    def predict_match(self, home_avg_goals: float, away_avg_goals: float) -> Dict[str, Any]:
        from scipy.stats import poisson

        # Simple Poisson model for scores
        max_goals = 6
        home_probs = [poisson.pmf(i, home_avg_goals) for i in range(max_goals)]
        away_probs = [poisson.pmf(i, away_avg_goals) for i in range(max_goals)]

        # Calculate matrix of score probabilities
        m = np.outer(home_probs, away_probs)

        home_win_prob = np.sum(np.tril(m, -1))
        draw_prob = np.sum(np.diag(m))
        away_win_prob = np.sum(np.triu(m, 1))

        over_2_5_prob = 1 - (m[0,0] + m[0,1] + m[0,2] + m[1,0] + m[1,1] + m[2,0])
        btts_prob = 1 - (np.sum(m[0, :]) + np.sum(m[:, 0]) - m[0,0])

        return {
            "1": float(home_win_prob),
            "X": float(draw_prob),
            "2": float(away_win_prob),
            "O2.5": float(over_2_5_prob),
            "BTTS": float(btts_prob)
        }
