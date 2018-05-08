var expect  = require('chai').expect;
var request = require('request');
// check for status and content
describe('Status and content', function() {
  // check home page
    describe ('home page', function() {
        it('status', function(done){
            request('http://nodejs-dev:8080/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://nodejs-dev:8080/' , function(error, response, body) {
                expect(body).to.equal('Hello World');
                done();
            });
        });
    });
  // check for 404 response code
    describe ('test 404', function() {
        it('status', function(done){
            request('http://nodejs-dev:8080/test_404', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });


/*
it('force fail', function(done) {
    request('http://nodejs-dev:8080/test_404' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
*/

});
