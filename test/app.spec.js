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
         supertest(app)
        .get('/manager')
        .expect(200)
        .then(res => {
          console.log('res: ' + res.body)
          // make sure you get an array
          expect(res.body).to.be.an('array');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
          // array must be length 12
          expect(res.body).to.have.lengthOf(12);
      
        });
    })
})
  
  describe('manager id', () => {
    it('GET /manager/id responds with 200 containing an array of length of 1 -1', () => {
      const id = 'idhere';
        supertest(app)
        .get(`/registration/${id}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
          // array must be length 50
          expect(res.body).to.have.lengthOf(1);
          
        });
    })
  })

  describe('manager first name', () => {
    it('GET /manager/first-name responds with 200 containing an array of length of 1 -1', () => {
      const firstName = 'laila';
        supertest(app)
        .get(`/manager/first-name/${firstName}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
          // array must be length 50
          expect(res.body).to.have.lengthOf(1);
          
        });
    })
  })

  describe('manager last name', () => {
    it('GET /manager/last-name responds with 200 containing an array of length of 1 -1', () => {
      const lastName = 'fitriana';
        supertest(app)
        .get(`/manager/last-name/${lastName}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
          // array must be length 50
          expect(res.body).to.have.lengthOf(1);
          
        });
    })
  })

  describe('manager by display name', () => {
    it('GET /manager/display-name responds with 200 containing an array of length of 1 -1', () => {
      const displayName = 'lailapfit';
        supertest(app)
        .get(`/manager/display-name/${displayName}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
          // array must be length 50
          expect(res.body).to.have.lengthOf(1);
          
        });
    })
  })
  //END: MANAGER TEST

  //START: PLAYER TEST

  describe('Get all players', () => {
    it('GET /player/ responds with 200 containing an array of length of > 1', () => {
      const teamName = 'team ashcity';
        supertest(app)
        .get('/player/')
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        });
    })
  })

  describe('Get player by id', () => {
    it('GET /player/id/ responds with 200 containing an array of length of > 1', () => {
      const playerId = '12344';
        supertest(app)
        .get(`/player/id/${playerId}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        });
    })
  })

  describe('Get player names by id', () => {
    it('GET /player/id-name responds with 200 containing an array of length of > 1', () => {
      const id = '12344';
        supertest(app)
        .get(`/player/id-name/${id}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        });
    })
  })

  describe('Get player stat by name', () => {
    it('GET /player/stat-name responds with 200 containing an array of length of > 1', () => {
      const name = 'Dak Prescott';
        supertest(app)
        .get(`/player/stat-name/${name}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        });
    })
  })

  describe('Get player stat by id', () => {
    it('GET /player/stat-id responds with 200 containing an array of length of > 1', () => {
      const id = '123344';
        supertest(app)
        .get(`/player/stat-id/${id}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        });
    })
  })

  describe('Get player injury stat by name', () => {
    it('GET /player/injury-stat-name responds with 200 containing an array of length of > 1', () => {
      const name = 'Levion Bell';
        supertest(app)
        .get(`/player/injury-stat-name/${name}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        });
    })
  })


  describe('Get player injury stat by id', () => {
    it('GET /player/injury-stat-id responds with 200 containing an array of length of > 1', () => {
      const id = '123344';
        supertest(app)
        .get(`/player/injury-stat-id/${id}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        });
    })
  })

  describe('Get player info stat by name', () => {
    it('GET /player/info-name responds with 200 containing an array of length of > 1', () => {
      const name = 'Dak Prescott';
        supertest(app)
        .get(`/player/info-name/${name}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        });
    })
  })

  describe('Get player info stat by id', () => {
    it('GET /player/info-id responds with 200 containing an array of length of > 1', () => {
      const id = '123344';
        supertest(app)
        .get(`/player/info-id/${id}`)
        .expect(200)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('object');
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
        });
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
