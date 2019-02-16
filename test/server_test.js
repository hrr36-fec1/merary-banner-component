const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
const request = require('request');
const movies = require('../database/seed.js');
const banner = require('../database/banner_db.js');
const serverBanner = require('../server/server.js');

it('Should render the correct body', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(body).to.equal('<!DOCTYPE html>\n<html lang="en">\n<head>\n</head>\n<body>\n   <div id="root"></div>\n   <script src="./public/bundle.js"></script>\n</body>\n</html>');
        done();
    });
});

it('Should send 200 for the homepage', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Should send 404 for a nonexistent endpoint', function(done) {
    request('http://localhost:8080/metacritic-rules' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});





