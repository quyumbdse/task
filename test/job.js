//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const Job = require('../models/').Job;
const should = chai.should();

chai.use(chaiHttp);

describe('GET job', () => {
    it('it should get all jobs', (done)=> {
        chai.request(server)
        .get('/api/jobs')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        })
    })
})