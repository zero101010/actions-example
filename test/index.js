let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server')
let should = chai.should();
chai.use(chaiHttp);

describe('Simple tests', () => {
    it('it should GET home address', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.eql({"Title":"Welcome to simple Api","Status":"Up","Version":"1"})
                done();
          });
    });
})


