from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_driver_elo():
    res = client.get('/elo/driver')
    assert res.status_code == 200
    assert 'drivers' in res.json()


def test_constructor_elo():
    res = client.get('/elo/constructor')
    assert res.status_code == 200
    assert 'constructors' in res.json()


def test_qualifying_prediction():
    res = client.get('/predict/qualifying')
    assert res.status_code == 200
    assert isinstance(res.json(), list)


def test_race_prediction():
    res = client.get('/predict/race')
    assert res.status_code == 200
    assert isinstance(res.json(), list)


def test_compare_headtohead():
    res = client.get('/compare/headtohead')
    assert res.status_code == 200
    data = res.json()
    assert 'driverA' in data and 'driverB' in data
