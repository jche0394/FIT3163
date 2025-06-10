from fastapi import FastAPI
from typing import List, Dict, Any

app = FastAPI(title="F1 Analytics API")

@app.get("/elo/driver")
async def get_driver_elo() -> Dict[str, Any]:
    """Return sample driver Elo rankings"""
    return {
        "drivers": [
            {"name": "Max Verstappen", "elo": 2000},
            {"name": "Lando Norris", "elo": 1950},
            {"name": "Charles Leclerc", "elo": 1930},
        ]
    }

@app.get("/elo/constructor")
async def get_constructor_elo() -> Dict[str, Any]:
    """Return sample constructor Elo rankings"""
    return {
        "constructors": [
            {"name": "Red Bull", "elo": 1985},
            {"name": "Ferrari", "elo": 1900},
            {"name": "McLaren", "elo": 1850},
        ]
    }

@app.get("/predict/qualifying")
async def get_qualifying_prediction() -> List[Dict[str, Any]]:
    """Predict Q3 results using practice and earlier session data."""
    return [
        {"position": 1, "driver": "Max Verstappen", "probability": "38%"},
        {"position": 2, "driver": "Lando Norris", "probability": "22%"},
        {"position": 3, "driver": "Charles Leclerc", "probability": "15%"},
    ]

@app.get("/predict/race")
async def get_race_prediction() -> List[Dict[str, Any]]:
    """Predict race results using grid position and practice pace."""
    return [
        {"position": 1, "driver": "Max Verstappen", "probability": "35%"},
        {"position": 2, "driver": "Lando Norris", "probability": "20%"},
        {"position": 3, "driver": "Charles Leclerc", "probability": "12%"},
    ]

@app.get("/compare/headtohead")
async def compare_head_to_head() -> Dict[str, Any]:
    """Compare two sample drivers head-to-head."""
    return {
        "driverA": {
            "name": "Max Verstappen",
            "wins": 5,
        },
        "driverB": {
            "name": "Lando Norris",
            "wins": 2,
        },
    }
