# World Fantasy Football Alliance - API

[Live App](https://wffa.vercel.app)

## Screenshots

![Home Page](https://i.imgur.com/gIhedmA.png) ![Profile](https://i.imgur.com/pNj8xhR.png) 
![Podcast](https://i.imgur.com/ZNdImln.png)

### This is an API for the WFFA app
---
This API provides data on the managers of the league. There's twelve managers and it's basic bio stats stored in PostgreSQL. Names, age, weight, height, DOB, school, favorite team, favorite player, and links to their bio pictures.

- **URL**
> <https://intense-mesa-76351.herokuapp.com>

- **Endpoints:**

  GET /manager/id/:managerId

  ```

  // req.body
  {
    ?
  }

  // res.body
  {
    [
      {
        "owner_id": "363053072924274688",
        "league_id": "590186196781543424",
        "firstname": "David",
        "lastname": "Quach",
        "height": "5'8",
        "weight": 165,
        "school": "Cleveland Heights Academy",
        "favoriteteam": "",
        "favoriteplayer": "",
        "experience": "4th Year",
        "display_name": "CuMap",
        "photolink": "",
        "active": true
      }
    ]
  }
  ```

  GET /manager/first/:firstName

  ```

  // req.body
  {
    ?
  }

  // res.body
  {
    [
      {
        "owner_id": "594996794933477376",
        "league_id": "590186196781543424",
        "firstname": "Laila",
        "lastname": "Fitriana",
        "height": "5'3",
        "weight": 123,
        "school": "OSU",
        "favoriteteam": "Ohio State University",
        "favoriteplayer": "Zeke Elliot",
        "experience": "1st year",
        "display_name": "lailapfit",
        "photolink": "../images/Laila.png",
        "active": true,
        "dob": "04-25-1990"
      }
    ]
  }
  ```

  GET /manager/last/:lastName

  ```

  // req.body
  {
    ?
  }

  // res.body
  {
    [
      {
        "owner_id": "456835062197907456",
        "league_id": "590186196781543424",
        "firstname": "Harvey",
        "lastname": "Le",
        "height": "5'8",
        "weight": 165,
        "school": "Wayne",
        "favoriteteam": "Ohio State University",
        "favoriteplayer": "Nick Bosa",
        "experience": "4th year",
        "display_name": "JurkFace",
        "photolink": "../images/Harvey.png",
        "active": true,
        "dob": "06-29-1986"
      },
      {
        "owner_id": "481637392860573696",
        "league_id": "590186196781543424",
        "firstname": "Tam",
        "lastname": "Le",
        "height": "5'9",
        "weight": 155,
        "school": "Wayne",
        "favoriteteam": "Cleveland Browns",
        "favoriteplayer": "Odell Beckham Jr",
        "experience": "6th year",
        "display_name": "blackthorn",
        "photolink": "../images/Tam.png",
        "active": true,
        "dob": "02-28-1985"
      }
    ]
  }
  ```

  GET /player/

  ```

  // req.body
  {
    ?
  }

  // res.body
  {
    [
      {
        "player": {
            "age": 36,
            "team": null,
            "sport": "nfl",
            "active": true,
            "number": 73,
            "status": "Inactive",
            "weight": "302",
            "college": "Miami (Fla.)",
            "espn_id": 9652,
            "gsis_id": null,
            "hashtag": "#EricWinston-NFL-FA-73",
            "metadata": null,
            "position": "OT",
            "stats_id": null,
            "yahoo_id": 7815,
            "full_name": "Eric Winston",
            "last_name": "Winston",
            "player_id": "324",
            "years_exp": 13,
            "birth_city": null,
            "birth_date": "1983-11-17",
            "first_name": "Eric",
            "birth_state": null,
            "high_school": null,
            "rotowire_id": 5000,
            "search_rank": 9999999,
            "injury_notes": null,
            "news_updated": 1510153201242,
            "rotoworld_id": null,
            "birth_country": null,
            "injury_status": null,
            "pandascore_id": null,
            "sportradar_id": "979f7f83-00e8-4ec8-9420-9e5a53f0b406",
            "fantasy_data_id": 7998,
            "injury_body_part": null,
            "search_full_name": "ericwinston",
            "search_last_name": "winston",
            "depth_chart_order": null,
            "fantasy_positions": [
                "OL"
            ],
            "injury_start_date": null,
            "search_first_name": "eric",
            "depth_chart_position": null,
            "practice_description": null,
            "practice_participation": null
        }
    ]
  }

- **Success Response:**
  - Code: 200
    
    Content: 
        "owner_id": "594996794933477376",
        "league_id": "590186196781543424",
        "firstname": "Laila",
        "lastname": "Fitriana",
        "height": "5'3",
        "weight": 123,
        "school": "OSU",
        "favoriteteam": "Ohio State University",
        "favoriteplayer": "Zeke Elliot",
        "experience": "1st year",
        "display_name": "lailapfit",
        "photolink": "../images/Laila.png",
        "active": true,
        "dob": "04-25-1990"

- **Built With**
  - Node - Run-time environment
  - Express - Web applilcation framework
  - Mocha - Testing
  - Chai - Testing