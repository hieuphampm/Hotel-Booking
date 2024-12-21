var restify = require('restify');
var jwt = require('jsonwebtoken');
var format = require('pg-format');
var Router = require('restify-router').Router;
var router = new Router();
router.applyRoutes(server);


var server = restify.createServer();
const { Client } = require('pg');
var corsMiddleware = require('restify-cors-middleware2');

var cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*'],
    allowHeaders:['X-App-Version'],
    exposeHeaders:[]
  });
  
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser({ mapParams: true })); 
server.use(restify.plugins.queryParser()); 


const root = require('./routes/root');
const room = require('./routes/room');
const login = require('./routes/login');
const manager = require('./routes/manager');
const booking = require('./routes/booking')
const booking_detail = require('./routes/booking_detail')
const services = require('./routes/services')

root.applyRoutes(server);
login.applyRoutes(server);
room.applyRoutes(server);
manager.applyRoutes(server);
booking.applyRoutes(server);
booking_detail.applyRoutes(server);
services.applyRoutes(server)

var PORT = 8080;
server.listen(PORT, function() {
    console.log('%s listening at %s', server.name, server.url);
});
