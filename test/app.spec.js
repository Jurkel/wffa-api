const chai = require('chai')
const nodeFetchMatchers = require('node-fetch-response-matchers');
const fetch = require('node-fetch');
const app = require('../src/app');
const managers = require('../users');
const { PROD_LINK } = require('../src/config');

chai.use(nodeFetchMatchers);

const test_user = [
  {
      "owner_id": "594996794933477376",
      "league_id": "590186196781543424",
      "firstname": "Laila",
      "lastname": "Fitriana",
      "height": "5'3",
      "weight": 125,
      "school": "Ohio State University",
      "favoriteteam": "Ohio State University",
      "favoriteplayer": "Nick Bosa",
      "experience": "Rookie",
      "display_name": "lailapfit",
      "photolink": "",
      "active": true
  }
];

const test_player = [
  {
      "player": {
          "age": 34,
          "team": null,
          "sport": "nfl",
          "active": false,
          "number": 88,
          "status": "Inactive",
          "weight": "268",
          "college": "California",
          "espn_id": 11319,
          "gsis_id": null,
          "hashtag": "#CraigStevens-NFL-FA-88",
          "metadata": null,
          "position": "TE",
          "stats_id": 213961,
          "yahoo_id": 8862,
          "full_name": "Craig Stevens",
          "last_name": "Stevens",
          "player_id": "0",
          "years_exp": 9,
          "birth_city": null,
          "birth_date": "1984-09-01",
          "first_name": "Craig",
          "birth_state": null,
          "high_school": null,
          "rotowire_id": 5777,
          "search_rank": 9999999,
          "injury_notes": null,
          "news_updated": null,
          "rotoworld_id": 4864,
          "birth_country": null,
          "injury_status": null,
          "pandascore_id": null,
          "sportradar_id": "71b9b180-93be-4bbc-bc9f-c48b53933c7c",
          "fantasy_data_id": 3,
          "injury_body_part": null,
          "search_full_name": "craigstevens",
          "search_last_name": "stevens",
          "depth_chart_order": 2,
          "fantasy_positions": [
              "TE"
          ],
          "injury_start_date": null,
          "search_first_name": "craig",
          "depth_chart_position": "TE",
          "practice_description": null,
          "practice_participation": null
      }
  }
];

const test_players = [
  {
      "player": {
          "age": 27,
          "team": null,
          "sport": "nfl",
          "active": false,
          "number": 60,
          "status": "Inactive",
          "weight": "285",
          "college": "Temple",
          "espn_id": 17054,
          "gsis_id": null,
          "hashtag": "#CodyBooth-NFL-FA-60",
          "metadata": null,
          "position": "OT",
          "stats_id": null,
          "yahoo_id": 27841,
          "full_name": "Cody Booth",
          "last_name": "Booth",
          "player_id": "2103",
          "years_exp": 1,
          "birth_city": null,
          "birth_date": "1991-04-22",
          "first_name": "Cody",
          "birth_state": null,
          "high_school": null,
          "rotowire_id": 9866,
          "search_rank": 9999999,
          "injury_notes": null,
          "news_updated": null,
          "rotoworld_id": null,
          "birth_country": null,
          "injury_status": null,
          "pandascore_id": null,
          "sportradar_id": "4cd4976e-e230-4935-ad3f-c12876a41350",
          "fantasy_data_id": 16426,
          "injury_body_part": null,
          "search_full_name": "codybooth",
          "search_last_name": "booth",
          "depth_chart_order": null,
          "fantasy_positions": [
              "OL"
          ],
          "injury_start_date": null,
          "search_first_name": "cody",
          "depth_chart_position": null,
          "practice_description": null,
          "practice_participation": null
      }
  },
  {
      "player": {
          "age": 34,
          "team": null,
          "sport": "nfl",
          "active": false,
          "number": 88,
          "status": "Inactive",
          "weight": "268",
          "college": "California",
          "espn_id": 11319,
          "gsis_id": null,
          "hashtag": "#CraigStevens-NFL-FA-88",
          "metadata": null,
          "position": "TE",
          "stats_id": 213961,
          "yahoo_id": 8862,
          "full_name": "Craig Stevens",
          "last_name": "Stevens",
          "player_id": "0",
          "years_exp": 9,
          "birth_city": null,
          "birth_date": "1984-09-01",
          "first_name": "Craig",
          "birth_state": null,
          "high_school": null,
          "rotowire_id": 5777,
          "search_rank": 9999999,
          "injury_notes": null,
          "news_updated": null,
          "rotoworld_id": 4864,
          "birth_country": null,
          "injury_status": null,
          "pandascore_id": null,
          "sportradar_id": "71b9b180-93be-4bbc-bc9f-c48b53933c7c",
          "fantasy_data_id": 3,
          "injury_body_part": null,
          "search_full_name": "craigstevens",
          "search_last_name": "stevens",
          "depth_chart_order": 2,
          "fantasy_positions": [
              "TE"
          ],
          "injury_start_date": null,
          "search_first_name": "craig",
          "depth_chart_position": "TE",
          "practice_description": null,
          "practice_participation": null
      }
  }
];

describe('App', () => {
  it('GET / responds with 200 containing "WFFL Home!"', () => {
    return expect(fetch(PROD_LINK)).to.be.successful().and.haveBodyText('WFFL Home!');
  })
})

//START: MANAGER TEST

  describe('GET /manager', () => {
    it('manager responds with 200', () => {
      return expect(fetch(PROD_LINK + '/manager/')).to.be.successful();
    });
    it('manager responds with the correct array', () => {
      return expect(fetch(PROD_LINK + '/manager/')).to.be.successful().and.haveBodyObject(managers);
    })
})
  
  describe('manager id', () => {
    it('GET /manager/id responds with 200 containing Lailas information', () => {
      const id = '594996794933477376';
      return expect(fetch(`${PROD_LINK}/manager/id/${id}`)).to.be.successful().and.haveBodyObject(test_user);
    })
  })

  describe('manager first name', () => {
    it('GET /manager/first-name responds with 200 containing Lailas information', () => {
      const firstName = 'Laila';
      return expect(fetch(`${PROD_LINK}/manager/first/${firstName}`)).to.be.successful().and.haveBodyObject(test_user);
    })
  })

  describe('manager last name', () => {
    it('GET /manager/last-name responds with 200 containing Lailas information', () => {
      const lastName = 'Fitriana';
      return expect(fetch(`${PROD_LINK}/manager/last/${lastName}`)).to.be.successful().and.haveBodyObject(test_user);
    })
  })

  describe('manager by display name', () => {
    it('GET /manager/display responds with 200 containing Lailas information', () => {
      const displayName = 'lailapfit';
      return expect(fetch(`${PROD_LINK}/manager/display/${displayName}`)).to.be.successful().and.haveBodyObject(test_user);
    })
  })
  //END: MANAGER TEST

  //START: PLAYER TEST

  describe('Get player by id', () => {
    it('GET /player/id/ responds with 200 containing an array of length of > 1', () => {
      const playerId = '0';
      return expect(fetch(`${PROD_LINK}/player/id/${playerId}`)).to.be.successful().and.haveBodyObject(test_player);
    })
  })

  describe('Get players by id array', () => {
    it('GET /ids/ids responds with 200 containing an array of length of > 2', () => {
      const id = '2013-0';
      return expect(fetch(`${PROD_LINK}/player/ids/${id}`)).to.be.successful().and.haveBodyObject(test_players);
    })
  })


  //END: PLAYER TEST


//   describe('manager with first abv not found', () => {
//     it('responds with 404 with error message', () => {
//       const stateAbv = 'A234';
//       const error = { error: { message: `State doesn't exist` } };
//         supertest(app)
//         .get(`/registration/${stateAbv}`)
//         .expect(404, error)
//     })
// })
