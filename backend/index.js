const restify = require('restify');
const server = restify.createServer();

// Middleware for CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        res.sendStatus(204);
        return;
    }
    next();
});

server.use(restify.plugins.bodyParser({ mapParams: false }));
server.use(restify.plugins.queryParser());

// Routes
const rootRoutes = require('./routes/root');
const roomRoutes = require('./routes/roomRoutes');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

rootRoutes.applyRoutes(server);
roomRoutes.applyRoutes(server);
authRoutes.applyRoutes(server);
bookingRoutes.applyRoutes(server);

// Error Handling
server.on('restifyError', (req, res, err, callback) => {
    console.error('Error occurred:', err);
    res.send(err.status || 500, { message: err.message || 'Internal Server Error' });
    return callback();
});

// Start Server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
