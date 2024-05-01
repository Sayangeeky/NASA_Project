const PORT = process.env.PORT || 9000;
const http = require('http')
const app = require('./app')
const {loadPlanetData} = require('./models/planets.model')

const server = http.createServer(app)

async function startServer(){
    await loadPlanetData();
    server.listen(PORT, () => {
        console.log(`Listening on server ${PORT}...`);
    })
}

startServer()