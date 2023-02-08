// Importation des bibliothèques nécessaires
const http = require('http');
const app = require('./app');

// Fonction pour normaliser le port
const normalizePort = val => {
const port = parseInt(val, 10);
if (isNaN(port)) {
    return val;
}
if (port >= 0) {
    return port;
}
return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Fonction pour gérer les erreurs
const errorHandler = error => {
if (error.syscall !== 'listen') {
    throw error;
}
const address = server.address();
const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
switch (error.code) {
case 'EACCES':
    console.error(bind + ' requires elevated privileges.');
    process.exit(1);
    break;
case 'EADDRINUSE':
    console.error(bind + ' is already in use.');
    process.exit(1);
    break;
default:
    throw error;
}
};

// Fonction pour écouter le serveur
const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', () => {
const address = server.address();
const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
console.log('Listening on ' + bind);
});

// Écoute du serveur sur l'adresse IP de votre VPS
server.listen(port, '194.31.150.94', () => {
console.log('Server started on port ' + port + ' and IP ' + '194.31.150.94');
});
