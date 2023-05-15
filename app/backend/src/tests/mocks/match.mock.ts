const allMatchesMock = [
    {
      "id": 1,
      "homeTeamId": 16,
      "homeTeamGoals": 1,
      "awayTeamId": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 8,
      "home_team_id": 16,
      "awayTeam": {
        "teamName": "Grêmio"
      },
      "homeTeam": {
        "teamName": "São Paulo"
      }
    },
    {
      "id": 2,
      "homeTeamId": 9,
      "homeTeamGoals": 1,
      "awayTeamId": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 14,
      "home_team_id": 9,
      "awayTeam": {
        "teamName": "Santos"
      },
      "homeTeam": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 3,
      "homeTeamId": 4,
      "homeTeamGoals": 3,
      "awayTeamId": 11,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 11,
      "home_team_id": 4,
      "awayTeam": {
        "teamName": "Napoli-SC"
      },
      "homeTeam": {
        "teamName": "Corinthians"
      }
    },
    {
      "id": 4,
      "homeTeamId": 3,
      "homeTeamGoals": 0,
      "awayTeamId": 2,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 2,
      "home_team_id": 3,
      "awayTeam": {
        "teamName": "Bahia"
      },
      "homeTeam": {
        "teamName": "Botafogo"
      }
    },
    {
      "id": 5,
      "homeTeamId": 7,
      "homeTeamGoals": 1,
      "awayTeamId": 10,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 10,
      "home_team_id": 7,
      "awayTeam": {
        "teamName": "Minas Brasília"
      },
      "homeTeam": {
        "teamName": "Flamengo"
      }
    },
    {
      "id": 6,
      "homeTeamId": 5,
      "homeTeamGoals": 1,
      "awayTeamId": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 13,
      "home_team_id": 5,
      "awayTeam": {
        "teamName": "Real Brasília"
      },
      "homeTeam": {
        "teamName": "Cruzeiro"
      }
    },
    {
      "id": 7,
      "homeTeamId": 12,
      "homeTeamGoals": 2,
      "awayTeamId": 6,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 6,
      "home_team_id": 12,
      "awayTeam": {
        "teamName": "Ferroviária"
      },
      "homeTeam": {
        "teamName": "Palmeiras"
      }
    },
    {
      "id": 8,
      "homeTeamId": 15,
      "homeTeamGoals": 0,
      "awayTeamId": 1,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 1,
      "home_team_id": 15,
      "awayTeam": {
        "teamName": "Avaí/Kindermann"
      },
      "homeTeam": {
        "teamName": "São José-SP"
      }
    },
    {
      "id": 9,
      "homeTeamId": 1,
      "homeTeamGoals": 0,
      "awayTeamId": 12,
      "awayTeamGoals": 3,
      "inProgress": false,
      "away_team_id": 12,
      "home_team_id": 1,
      "awayTeam": {
        "teamName": "Palmeiras"
      },
      "homeTeam": {
        "teamName": "Avaí/Kindermann"
      }
    },
    {
      "id": 10,
      "homeTeamId": 2,
      "homeTeamGoals": 0,
      "awayTeamId": 9,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 9,
      "home_team_id": 2,
      "awayTeam": {
        "teamName": "Internacional"
      },
      "homeTeam": {
        "teamName": "Bahia"
      }
    },
    {
      "id": 11,
      "homeTeamId": 13,
      "homeTeamGoals": 1,
      "awayTeamId": 3,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 3,
      "home_team_id": 13,
      "awayTeam": {
        "teamName": "Botafogo"
      },
      "homeTeam": {
        "teamName": "Real Brasília"
      }
    },
    {
      "id": 12,
      "homeTeamId": 6,
      "homeTeamGoals": 0,
      "awayTeamId": 4,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 4,
      "home_team_id": 6,
      "awayTeam": {
        "teamName": "Corinthians"
      },
      "homeTeam": {
        "teamName": "Ferroviária"
      }
    },
    {
      "id": 13,
      "homeTeamId": 8,
      "homeTeamGoals": 2,
      "awayTeamId": 5,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 5,
      "home_team_id": 8,
      "awayTeam": {
        "teamName": "Cruzeiro"
      },
      "homeTeam": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 14,
      "homeTeamId": 14,
      "homeTeamGoals": 2,
      "awayTeamId": 16,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 16,
      "home_team_id": 14,
      "awayTeam": {
        "teamName": "São Paulo"
      },
      "homeTeam": {
        "teamName": "Santos"
      }
    },
    {
      "id": 15,
      "homeTeamId": 10,
      "homeTeamGoals": 0,
      "awayTeamId": 15,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 15,
      "home_team_id": 10,
      "awayTeam": {
        "teamName": "São José-SP"
      },
      "homeTeam": {
        "teamName": "Minas Brasília"
      }
    },
    {
      "id": 16,
      "homeTeamId": 11,
      "homeTeamGoals": 0,
      "awayTeamId": 7,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 7,
      "home_team_id": 11,
      "awayTeam": {
        "teamName": "Flamengo"
      },
      "homeTeam": {
        "teamName": "Napoli-SC"
      }
    },
    {
      "id": 17,
      "homeTeamId": 1,
      "homeTeamGoals": 2,
      "awayTeamId": 8,
      "awayTeamGoals": 3,
      "inProgress": false,
      "away_team_id": 8,
      "home_team_id": 1,
      "awayTeam": {
        "teamName": "Grêmio"
      },
      "homeTeam": {
        "teamName": "Avaí/Kindermann"
      }
    },
    {
      "id": 18,
      "homeTeamId": 12,
      "homeTeamGoals": 4,
      "awayTeamId": 5,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 5,
      "home_team_id": 12,
      "awayTeam": {
        "teamName": "Cruzeiro"
      },
      "homeTeam": {
        "teamName": "Palmeiras"
      }
    },
    {
      "id": 19,
      "homeTeamId": 11,
      "homeTeamGoals": 2,
      "awayTeamId": 2,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 2,
      "home_team_id": 11,
      "awayTeam": {
        "teamName": "Bahia"
      },
      "homeTeam": {
        "teamName": "Napoli-SC"
      }
    },
    {
      "id": 20,
      "homeTeamId": 7,
      "homeTeamGoals": 0,
      "awayTeamId": 9,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 9,
      "home_team_id": 7,
      "awayTeam": {
        "teamName": "Internacional"
      },
      "homeTeam": {
        "teamName": "Flamengo"
      }
    },
    {
      "id": 21,
      "homeTeamId": 6,
      "homeTeamGoals": 3,
      "awayTeamId": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 13,
      "home_team_id": 6,
      "awayTeam": {
        "teamName": "Real Brasília"
      },
      "homeTeam": {
        "teamName": "Ferroviária"
      }
    },
    {
      "id": 22,
      "homeTeamId": 4,
      "homeTeamGoals": 3,
      "awayTeamId": 3,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 3,
      "home_team_id": 4,
      "awayTeam": {
        "teamName": "Botafogo"
      },
      "homeTeam": {
        "teamName": "Corinthians"
      }
    },
    {
      "id": 23,
      "homeTeamId": 15,
      "homeTeamGoals": 2,
      "awayTeamId": 16,
      "awayTeamGoals": 3,
      "inProgress": false,
      "away_team_id": 16,
      "home_team_id": 15,
      "awayTeam": {
        "teamName": "São Paulo"
      },
      "homeTeam": {
        "teamName": "São José-SP"
      }
    },
    {
      "id": 24,
      "homeTeamId": 10,
      "homeTeamGoals": 2,
      "awayTeamId": 14,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 14,
      "home_team_id": 10,
      "awayTeam": {
        "teamName": "Santos"
      },
      "homeTeam": {
        "teamName": "Minas Brasília"
      }
    },
    {
      "id": 25,
      "homeTeamId": 2,
      "homeTeamGoals": 0,
      "awayTeamId": 6,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 6,
      "home_team_id": 2,
      "awayTeam": {
        "teamName": "Ferroviária"
      },
      "homeTeam": {
        "teamName": "Bahia"
      }
    },
    {
      "id": 26,
      "homeTeamId": 13,
      "homeTeamGoals": 1,
      "awayTeamId": 1,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 1,
      "home_team_id": 13,
      "awayTeam": {
        "teamName": "Avaí/Kindermann"
      },
      "homeTeam": {
        "teamName": "Real Brasília"
      }
    },
    {
      "id": 27,
      "homeTeamId": 5,
      "homeTeamGoals": 1,
      "awayTeamId": 15,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 15,
      "home_team_id": 5,
      "awayTeam": {
        "teamName": "São José-SP"
      },
      "homeTeam": {
        "teamName": "Cruzeiro"
      }
    },
    {
      "id": 28,
      "homeTeamId": 16,
      "homeTeamGoals": 3,
      "awayTeamId": 7,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 7,
      "home_team_id": 16,
      "awayTeam": {
        "teamName": "Flamengo"
      },
      "homeTeam": {
        "teamName": "São Paulo"
      }
    },
    {
      "id": 29,
      "homeTeamId": 9,
      "homeTeamGoals": 0,
      "awayTeamId": 4,
      "awayTeamGoals": 4,
      "inProgress": false,
      "away_team_id": 4,
      "home_team_id": 9,
      "awayTeam": {
        "teamName": "Corinthians"
      },
      "homeTeam": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 30,
      "homeTeamId": 3,
      "homeTeamGoals": 0,
      "awayTeamId": 12,
      "awayTeamGoals": 4,
      "inProgress": false,
      "away_team_id": 12,
      "home_team_id": 3,
      "awayTeam": {
        "teamName": "Palmeiras"
      },
      "homeTeam": {
        "teamName": "Botafogo"
      }
    },
    {
      "id": 31,
      "homeTeamId": 8,
      "homeTeamGoals": 2,
      "awayTeamId": 10,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 10,
      "home_team_id": 8,
      "awayTeam": {
        "teamName": "Minas Brasília"
      },
      "homeTeam": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 32,
      "homeTeamId": 14,
      "homeTeamGoals": 5,
      "awayTeamId": 11,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 11,
      "home_team_id": 14,
      "awayTeam": {
        "teamName": "Napoli-SC"
      },
      "homeTeam": {
        "teamName": "Santos"
      }
    },
    {
      "id": 33,
      "homeTeamId": 1,
      "homeTeamGoals": 1,
      "awayTeamId": 16,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 16,
      "home_team_id": 1,
      "awayTeam": {
        "teamName": "São Paulo"
      },
      "homeTeam": {
        "teamName": "Avaí/Kindermann"
      }
    },
    {
      "id": 34,
      "homeTeamId": 9,
      "homeTeamGoals": 3,
      "awayTeamId": 6,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 6,
      "home_team_id": 9,
      "awayTeam": {
        "teamName": "Ferroviária"
      },
      "homeTeam": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 35,
      "homeTeamId": 10,
      "homeTeamGoals": 1,
      "awayTeamId": 5,
      "awayTeamGoals": 3,
      "inProgress": false,
      "away_team_id": 5,
      "home_team_id": 10,
      "awayTeam": {
        "teamName": "Cruzeiro"
      },
      "homeTeam": {
        "teamName": "Minas Brasília"
      }
    },
    {
      "id": 36,
      "homeTeamId": 2,
      "homeTeamGoals": 0,
      "awayTeamId": 7,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 7,
      "home_team_id": 2,
      "awayTeam": {
        "teamName": "Flamengo"
      },
      "homeTeam": {
        "teamName": "Bahia"
      }
    },
    {
      "id": 37,
      "homeTeamId": 15,
      "homeTeamGoals": 0,
      "awayTeamId": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 13,
      "home_team_id": 15,
      "awayTeam": {
        "teamName": "Real Brasília"
      },
      "homeTeam": {
        "teamName": "São José-SP"
      }
    },
    {
      "id": 38,
      "homeTeamId": 14,
      "homeTeamGoals": 2,
      "awayTeamId": 4,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 4,
      "home_team_id": 14,
      "awayTeam": {
        "teamName": "Corinthians"
      },
      "homeTeam": {
        "teamName": "Santos"
      }
    },
    {
      "id": 39,
      "homeTeamId": 3,
      "homeTeamGoals": 2,
      "awayTeamId": 11,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 11,
      "home_team_id": 3,
      "awayTeam": {
        "teamName": "Napoli-SC"
      },
      "homeTeam": {
        "teamName": "Botafogo"
      }
    },
    {
      "id": 40,
      "homeTeamId": 12,
      "homeTeamGoals": 4,
      "awayTeamId": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 8,
      "home_team_id": 12,
      "awayTeam": {
        "teamName": "Grêmio"
      },
      "homeTeam": {
        "teamName": "Palmeiras"
      }
    },
    {
      "id": 41,
      "homeTeamId": 16,
      "homeTeamGoals": 2,
      "awayTeamId": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "away_team_id": 9,
      "home_team_id": 16,
      "awayTeam": {
        "teamName": "Internacional"
      },
      "homeTeam": {
        "teamName": "São Paulo"
      }
    },
    {
      "id": 42,
      "homeTeamId": 6,
      "homeTeamGoals": 1,
      "awayTeamId": 1,
      "awayTeamGoals": 0,
      "inProgress": true,
      "away_team_id": 1,
      "home_team_id": 6,
      "awayTeam": {
        "teamName": "Avaí/Kindermann"
      },
      "homeTeam": {
        "teamName": "Ferroviária"
      }
    },
    {
      "id": 43,
      "homeTeamId": 11,
      "homeTeamGoals": 0,
      "awayTeamId": 10,
      "awayTeamGoals": 0,
      "inProgress": true,
      "away_team_id": 10,
      "home_team_id": 11,
      "awayTeam": {
        "teamName": "Minas Brasília"
      },
      "homeTeam": {
        "teamName": "Napoli-SC"
      }
    },
    {
      "id": 44,
      "homeTeamId": 7,
      "homeTeamGoals": 2,
      "awayTeamId": 15,
      "awayTeamGoals": 2,
      "inProgress": true,
      "away_team_id": 15,
      "home_team_id": 7,
      "awayTeam": {
        "teamName": "São José-SP"
      },
      "homeTeam": {
        "teamName": "Flamengo"
      }
    },
    {
      "id": 45,
      "homeTeamId": 5,
      "homeTeamGoals": 1,
      "awayTeamId": 3,
      "awayTeamGoals": 1,
      "inProgress": true,
      "away_team_id": 3,
      "home_team_id": 5,
      "awayTeam": {
        "teamName": "Botafogo"
      },
      "homeTeam": {
        "teamName": "Cruzeiro"
      }
    },
    {
      "id": 46,
      "homeTeamId": 4,
      "homeTeamGoals": 1,
      "awayTeamId": 12,
      "awayTeamGoals": 1,
      "inProgress": true,
      "away_team_id": 12,
      "home_team_id": 4,
      "awayTeam": {
        "teamName": "Palmeiras"
      },
      "homeTeam": {
        "teamName": "Corinthians"
      }
    },
    {
      "id": 47,
      "homeTeamId": 8,
      "homeTeamGoals": 1,
      "awayTeamId": 14,
      "awayTeamGoals": 2,
      "inProgress": true,
      "away_team_id": 14,
      "home_team_id": 8,
      "awayTeam": {
        "teamName": "Santos"
      },
      "homeTeam": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 48,
      "homeTeamId": 13,
      "homeTeamGoals": 1,
      "awayTeamId": 2,
      "awayTeamGoals": 1,
      "inProgress": true,
      "away_team_id": 2,
      "home_team_id": 13,
      "awayTeam": {
        "teamName": "Bahia"
      },
      "homeTeam": {
        "teamName": "Real Brasília"
      }
    }
  ]

  const inProgressTrue = [

    {
      "id": 41,
      "homeTeamId": 16,
      "homeTeamGoals": 2,
      "awayTeamId": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "away_team_id": 9,
      "home_team_id": 16,
      "awayTeam": {
        "teamName": "Internacional"
      },
      "homeTeam": {
        "teamName": "São Paulo"
      }
    },
    {
      "id": 42,
      "homeTeamId": 6,
      "homeTeamGoals": 1,
      "awayTeamId": 1,
      "awayTeamGoals": 0,
      "inProgress": true,
      "away_team_id": 1,
      "home_team_id": 6,
      "awayTeam": {
        "teamName": "Avaí/Kindermann"
      },
      "homeTeam": {
        "teamName": "Ferroviária"
      }
    },
    {
      "id": 43,
      "homeTeamId": 11,
      "homeTeamGoals": 0,
      "awayTeamId": 10,
      "awayTeamGoals": 0,
      "inProgress": true,
      "away_team_id": 10,
      "home_team_id": 11,
      "awayTeam": {
        "teamName": "Minas Brasília"
      },
      "homeTeam": {
        "teamName": "Napoli-SC"
      }
    },
    {
      "id": 44,
      "homeTeamId": 7,
      "homeTeamGoals": 2,
      "awayTeamId": 15,
      "awayTeamGoals": 2,
      "inProgress": true,
      "away_team_id": 15,
      "home_team_id": 7,
      "awayTeam": {
        "teamName": "São José-SP"
      },
      "homeTeam": {
        "teamName": "Flamengo"
      }
    },
    {
      "id": 45,
      "homeTeamId": 5,
      "homeTeamGoals": 1,
      "awayTeamId": 3,
      "awayTeamGoals": 1,
      "inProgress": true,
      "away_team_id": 3,
      "home_team_id": 5,
      "awayTeam": {
        "teamName": "Botafogo"
      },
      "homeTeam": {
        "teamName": "Cruzeiro"
      }
    },
    {
      "id": 46,
      "homeTeamId": 4,
      "homeTeamGoals": 1,
      "awayTeamId": 12,
      "awayTeamGoals": 1,
      "inProgress": true,
      "away_team_id": 12,
      "home_team_id": 4,
      "awayTeam": {
        "teamName": "Palmeiras"
      },
      "homeTeam": {
        "teamName": "Corinthians"
      }
    },
    {
      "id": 47,
      "homeTeamId": 8,
      "homeTeamGoals": 1,
      "awayTeamId": 14,
      "awayTeamGoals": 2,
      "inProgress": true,
      "away_team_id": 14,
      "home_team_id": 8,
      "awayTeam": {
        "teamName": "Santos"
      },
      "homeTeam": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 48,
      "homeTeamId": 13,
      "homeTeamGoals": 1,
      "awayTeamId": 2,
      "awayTeamGoals": 1,
      "inProgress": true,
      "away_team_id": 2,
      "home_team_id": 13,
      "awayTeam": {
        "teamName": "Bahia"
      },
      "homeTeam": {
        "teamName": "Real Brasília"
      }
    }
  ]

  const inProgressFalse = [

    {
      "id": 1,
      "homeTeamId": 16,
      "homeTeamGoals": 1,
      "awayTeamId": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 8,
      "home_team_id": 16,
      "awayTeam": {
        "teamName": "Grêmio"
      },
      "homeTeam": {
        "teamName": "São Paulo"
      }
    },
    {
      "id": 2,
      "homeTeamId": 9,
      "homeTeamGoals": 1,
      "awayTeamId": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 14,
      "home_team_id": 9,
      "awayTeam": {
        "teamName": "Santos"
      },
      "homeTeam": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 3,
      "homeTeamId": 4,
      "homeTeamGoals": 3,
      "awayTeamId": 11,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 11,
      "home_team_id": 4,
      "awayTeam": {
        "teamName": "Napoli-SC"
      },
      "homeTeam": {
        "teamName": "Corinthians"
      }
    },
    {
      "id": 4,
      "homeTeamId": 3,
      "homeTeamGoals": 0,
      "awayTeamId": 2,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 2,
      "home_team_id": 3,
      "awayTeam": {
        "teamName": "Bahia"
      },
      "homeTeam": {
        "teamName": "Botafogo"
      }
    },
    {
      "id": 5,
      "homeTeamId": 7,
      "homeTeamGoals": 1,
      "awayTeamId": 10,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 10,
      "home_team_id": 7,
      "awayTeam": {
        "teamName": "Minas Brasília"
      },
      "homeTeam": {
        "teamName": "Flamengo"
      }
    },
    {
      "id": 6,
      "homeTeamId": 5,
      "homeTeamGoals": 1,
      "awayTeamId": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 13,
      "home_team_id": 5,
      "awayTeam": {
        "teamName": "Real Brasília"
      },
      "homeTeam": {
        "teamName": "Cruzeiro"
      }
    },
    {
      "id": 7,
      "homeTeamId": 12,
      "homeTeamGoals": 2,
      "awayTeamId": 6,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 6,
      "home_team_id": 12,
      "awayTeam": {
        "teamName": "Ferroviária"
      },
      "homeTeam": {
        "teamName": "Palmeiras"
      }
    },
    {
      "id": 8,
      "homeTeamId": 15,
      "homeTeamGoals": 0,
      "awayTeamId": 1,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 1,
      "home_team_id": 15,
      "awayTeam": {
        "teamName": "Avaí/Kindermann"
      },
      "homeTeam": {
        "teamName": "São José-SP"
      }
    },
    {
      "id": 9,
      "homeTeamId": 1,
      "homeTeamGoals": 0,
      "awayTeamId": 12,
      "awayTeamGoals": 3,
      "inProgress": false,
      "away_team_id": 12,
      "home_team_id": 1,
      "awayTeam": {
        "teamName": "Palmeiras"
      },
      "homeTeam": {
        "teamName": "Avaí/Kindermann"
      }
    },
    {
      "id": 10,
      "homeTeamId": 2,
      "homeTeamGoals": 0,
      "awayTeamId": 9,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 9,
      "home_team_id": 2,
      "awayTeam": {
        "teamName": "Internacional"
      },
      "homeTeam": {
        "teamName": "Bahia"
      }
    },
    {
      "id": 11,
      "homeTeamId": 13,
      "homeTeamGoals": 1,
      "awayTeamId": 3,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 3,
      "home_team_id": 13,
      "awayTeam": {
        "teamName": "Botafogo"
      },
      "homeTeam": {
        "teamName": "Real Brasília"
      }
    },
    {
      "id": 12,
      "homeTeamId": 6,
      "homeTeamGoals": 0,
      "awayTeamId": 4,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 4,
      "home_team_id": 6,
      "awayTeam": {
        "teamName": "Corinthians"
      },
      "homeTeam": {
        "teamName": "Ferroviária"
      }
    },
    {
      "id": 13,
      "homeTeamId": 8,
      "homeTeamGoals": 2,
      "awayTeamId": 5,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 5,
      "home_team_id": 8,
      "awayTeam": {
        "teamName": "Cruzeiro"
      },
      "homeTeam": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 14,
      "homeTeamId": 14,
      "homeTeamGoals": 2,
      "awayTeamId": 16,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 16,
      "home_team_id": 14,
      "awayTeam": {
        "teamName": "São Paulo"
      },
      "homeTeam": {
        "teamName": "Santos"
      }
    },
    {
      "id": 15,
      "homeTeamId": 10,
      "homeTeamGoals": 0,
      "awayTeamId": 15,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 15,
      "home_team_id": 10,
      "awayTeam": {
        "teamName": "São José-SP"
      },
      "homeTeam": {
        "teamName": "Minas Brasília"
      }
    },
    {
      "id": 16,
      "homeTeamId": 11,
      "homeTeamGoals": 0,
      "awayTeamId": 7,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 7,
      "home_team_id": 11,
      "awayTeam": {
        "teamName": "Flamengo"
      },
      "homeTeam": {
        "teamName": "Napoli-SC"
      }
    },
    {
      "id": 17,
      "homeTeamId": 1,
      "homeTeamGoals": 2,
      "awayTeamId": 8,
      "awayTeamGoals": 3,
      "inProgress": false,
      "away_team_id": 8,
      "home_team_id": 1,
      "awayTeam": {
        "teamName": "Grêmio"
      },
      "homeTeam": {
        "teamName": "Avaí/Kindermann"
      }
    },
    {
      "id": 18,
      "homeTeamId": 12,
      "homeTeamGoals": 4,
      "awayTeamId": 5,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 5,
      "home_team_id": 12,
      "awayTeam": {
        "teamName": "Cruzeiro"
      },
      "homeTeam": {
        "teamName": "Palmeiras"
      }
    },
    {
      "id": 19,
      "homeTeamId": 11,
      "homeTeamGoals": 2,
      "awayTeamId": 2,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 2,
      "home_team_id": 11,
      "awayTeam": {
        "teamName": "Bahia"
      },
      "homeTeam": {
        "teamName": "Napoli-SC"
      }
    },
    {
      "id": 20,
      "homeTeamId": 7,
      "homeTeamGoals": 0,
      "awayTeamId": 9,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 9,
      "home_team_id": 7,
      "awayTeam": {
        "teamName": "Internacional"
      },
      "homeTeam": {
        "teamName": "Flamengo"
      }
    },
    {
      "id": 21,
      "homeTeamId": 6,
      "homeTeamGoals": 3,
      "awayTeamId": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 13,
      "home_team_id": 6,
      "awayTeam": {
        "teamName": "Real Brasília"
      },
      "homeTeam": {
        "teamName": "Ferroviária"
      }
    },
    {
      "id": 22,
      "homeTeamId": 4,
      "homeTeamGoals": 3,
      "awayTeamId": 3,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 3,
      "home_team_id": 4,
      "awayTeam": {
        "teamName": "Botafogo"
      },
      "homeTeam": {
        "teamName": "Corinthians"
      }
    },
    {
      "id": 23,
      "homeTeamId": 15,
      "homeTeamGoals": 2,
      "awayTeamId": 16,
      "awayTeamGoals": 3,
      "inProgress": false,
      "away_team_id": 16,
      "home_team_id": 15,
      "awayTeam": {
        "teamName": "São Paulo"
      },
      "homeTeam": {
        "teamName": "São José-SP"
      }
    },
    {
      "id": 24,
      "homeTeamId": 10,
      "homeTeamGoals": 2,
      "awayTeamId": 14,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 14,
      "home_team_id": 10,
      "awayTeam": {
        "teamName": "Santos"
      },
      "homeTeam": {
        "teamName": "Minas Brasília"
      }
    },
    {
      "id": 25,
      "homeTeamId": 2,
      "homeTeamGoals": 0,
      "awayTeamId": 6,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 6,
      "home_team_id": 2,
      "awayTeam": {
        "teamName": "Ferroviária"
      },
      "homeTeam": {
        "teamName": "Bahia"
      }
    },
    {
      "id": 26,
      "homeTeamId": 13,
      "homeTeamGoals": 1,
      "awayTeamId": 1,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 1,
      "home_team_id": 13,
      "awayTeam": {
        "teamName": "Avaí/Kindermann"
      },
      "homeTeam": {
        "teamName": "Real Brasília"
      }
    },
    {
      "id": 27,
      "homeTeamId": 5,
      "homeTeamGoals": 1,
      "awayTeamId": 15,
      "awayTeamGoals": 2,
      "inProgress": false,
      "away_team_id": 15,
      "home_team_id": 5,
      "awayTeam": {
        "teamName": "São José-SP"
      },
      "homeTeam": {
        "teamName": "Cruzeiro"
      }
    },
    {
      "id": 28,
      "homeTeamId": 16,
      "homeTeamGoals": 3,
      "awayTeamId": 7,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 7,
      "home_team_id": 16,
      "awayTeam": {
        "teamName": "Flamengo"
      },
      "homeTeam": {
        "teamName": "São Paulo"
      }
    },
    {
      "id": 29,
      "homeTeamId": 9,
      "homeTeamGoals": 0,
      "awayTeamId": 4,
      "awayTeamGoals": 4,
      "inProgress": false,
      "away_team_id": 4,
      "home_team_id": 9,
      "awayTeam": {
        "teamName": "Corinthians"
      },
      "homeTeam": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 30,
      "homeTeamId": 3,
      "homeTeamGoals": 0,
      "awayTeamId": 12,
      "awayTeamGoals": 4,
      "inProgress": false,
      "away_team_id": 12,
      "home_team_id": 3,
      "awayTeam": {
        "teamName": "Palmeiras"
      },
      "homeTeam": {
        "teamName": "Botafogo"
      }
    },
    {
      "id": 31,
      "homeTeamId": 8,
      "homeTeamGoals": 2,
      "awayTeamId": 10,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 10,
      "home_team_id": 8,
      "awayTeam": {
        "teamName": "Minas Brasília"
      },
      "homeTeam": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 32,
      "homeTeamId": 14,
      "homeTeamGoals": 5,
      "awayTeamId": 11,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 11,
      "home_team_id": 14,
      "awayTeam": {
        "teamName": "Napoli-SC"
      },
      "homeTeam": {
        "teamName": "Santos"
      }
    },
    {
      "id": 33,
      "homeTeamId": 1,
      "homeTeamGoals": 1,
      "awayTeamId": 16,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 16,
      "home_team_id": 1,
      "awayTeam": {
        "teamName": "São Paulo"
      },
      "homeTeam": {
        "teamName": "Avaí/Kindermann"
      }
    },
    {
      "id": 34,
      "homeTeamId": 9,
      "homeTeamGoals": 3,
      "awayTeamId": 6,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 6,
      "home_team_id": 9,
      "awayTeam": {
        "teamName": "Ferroviária"
      },
      "homeTeam": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 35,
      "homeTeamId": 10,
      "homeTeamGoals": 1,
      "awayTeamId": 5,
      "awayTeamGoals": 3,
      "inProgress": false,
      "away_team_id": 5,
      "home_team_id": 10,
      "awayTeam": {
        "teamName": "Cruzeiro"
      },
      "homeTeam": {
        "teamName": "Minas Brasília"
      }
    },
    {
      "id": 36,
      "homeTeamId": 2,
      "homeTeamGoals": 0,
      "awayTeamId": 7,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 7,
      "home_team_id": 2,
      "awayTeam": {
        "teamName": "Flamengo"
      },
      "homeTeam": {
        "teamName": "Bahia"
      }
    },
    {
      "id": 37,
      "homeTeamId": 15,
      "homeTeamGoals": 0,
      "awayTeamId": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 13,
      "home_team_id": 15,
      "awayTeam": {
        "teamName": "Real Brasília"
      },
      "homeTeam": {
        "teamName": "São José-SP"
      }
    },
    {
      "id": 38,
      "homeTeamId": 14,
      "homeTeamGoals": 2,
      "awayTeamId": 4,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 4,
      "home_team_id": 14,
      "awayTeam": {
        "teamName": "Corinthians"
      },
      "homeTeam": {
        "teamName": "Santos"
      }
    },
    {
      "id": 39,
      "homeTeamId": 3,
      "homeTeamGoals": 2,
      "awayTeamId": 11,
      "awayTeamGoals": 0,
      "inProgress": false,
      "away_team_id": 11,
      "home_team_id": 3,
      "awayTeam": {
        "teamName": "Napoli-SC"
      },
      "homeTeam": {
        "teamName": "Botafogo"
      }
    },
    {
      "id": 40,
      "homeTeamId": 12,
      "homeTeamGoals": 4,
      "awayTeamId": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "away_team_id": 8,
      "home_team_id": 12,
      "awayTeam": {
        "teamName": "Grêmio"
      },
      "homeTeam": {
        "teamName": "Palmeiras"
      }
    }
  ]

  export { allMatchesMock, inProgressTrue, inProgressFalse }