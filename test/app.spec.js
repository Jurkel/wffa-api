const { expect, assert } = require('chai')
const app = require('../src/app')


describe('App', () => {
  it('GET / responds with 200 containing "WFFL Home!"', () => {
       supertest(app)
      .get('/')
      .expect(200, 'WFFL Home!')
  })
})

//START: MANAGER TEST

  describe('GET /manager', () => {
    it('manager responds with 200 containing an array of length 12', () => {
         return supertest(app)
        .get('/manager/')
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('array');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        })
    })
})
  
  describe('manager id', () => {
    it('GET /manager/id responds with 200 containing an array of length of 1 -1', () => {
      const id = '481637392860573696';
        return supertest(app)
        .get(`/manager/${id}`)
        // .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('array');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
          // array must be length 50
          expect(res.body).to.have.lengthOf(1);
          expect(res.body).to.have.property("owner_id");
          
        })
        .catch(error => {
          console.log('error' + error);
        })
    })
  })

  describe('manager first name', () => {
    it('GET /manager/first-name responds with 200 containing an array of length of 1 -1', () => {
      const firstName = 'laila';
        return supertest(app)
        .get(`/manager/first-name/${firstName}`)
        // .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
          // array must be length 50
          expect(res.body).to.have.lengthOf(1);
          
        })
        .catch(error => {
          console.log('error' + error);
        })
    })
  })

  describe('manager last name', () => {
    it('GET /manager/last-name responds with 200 containing an array of length of 1 -1', () => {
      const lastName = 'fitriana';
        return supertest(app)
        .get(`/manager/last-name/${lastName}`)
        // .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
          // array must be length 50
          expect(res.body).to.have.lengthOf(1);
          
        })
        .catch(error => {
          console.log('error' + error);
        })
    })
  })

  describe('manager by display name', () => {
    it('GET /manager/display-name responds with 200 containing an array of length of 1 -1', () => {
      const displayName = 'lailapfit';
        return supertest(app)
        .get(`/manager/display-name/${displayName}`)
        // .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
          // array must be length 50
          expect(res.body).to.have.lengthOf(1);
          
        })
        .catch(error => {
          console.log('error' + error);
        })
    })
  })
  //END: MANAGER TEST

  //START: PLAYER TEST

  describe('Get all players', () => {
    it('GET /player/ responds with 200 containing an array of length of > 1', () => {
      const teamName = 'team ashcity';
        return supertest(app)
        .get('/player/')
        // .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        })
        .catch(error => {
          console.log('error' + error);
        })
    })
  })

  describe('Get player by id', () => {
    it('GET /player/id/ responds with 200 containing an array of length of > 1', () => {
      const playerId = '2103';
        return supertest(app)
        .get(`/player/id/${playerId}`)
        // .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        })
        .catch(error => {
          console.log('error' + error);
        })
    })
  })

  describe('Get players by id array', () => {
    it('GET /ids/ids responds with 200 containing an array of length of > 2', () => {
      const id = '2013,0';
        return supertest(app)
        .get(`/player/ids/${id}`)
        // .expect(200)
        .then(res => {
          console.log('resbody: ' + JSON.stringify(res.body));
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(2);
        })
        .catch(error => {
          console.log('error' + error);
        })
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
