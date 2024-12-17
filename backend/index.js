const restify = require('restify');
const server = restify.createServer();

// CORS middleware thủ công
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    if (req.method === 'OPTIONS') {
        res.send(204); 
    } else {
        next();
    }
});

// BodyParser và QueryParser
server.use(restify.plugins.bodyParser({ mapParams: true }));
server.use(restify.plugins.queryParser());

// Import routes
const root = require('./routes/root');
const room = require('./routes/roomRoutes');

root.applyRoutes(server);
room.applyRoutes(server);

// Khởi động server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
