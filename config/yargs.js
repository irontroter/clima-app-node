const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obterner el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}