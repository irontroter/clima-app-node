// const axios = require('axios');
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {

    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);

        return (`La temperatura de ${coords.direccion} és de ${temp} C`);
    } catch (e) {
        return (`No trobem informació de la temperatura per el lloc ${coords.direccion}`);
    }

}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e))



// lugar.getLugarLatLng(argv.direccion)

// .then(resp => {

//         let lat = resp.lat;
//         let lng = resp.lng;

//         console.log(resp.direccion);
//         clima.getClima(lat, lng)
//             .then(temp => console.log(temp))
//             .catch(e => console.log('error en la consulta', e))
//     })
//     .catch(e => console.log(e));









// lugar.getLugarLatLng(argv.direccion)

// .then(resp => {

//         console.log(resp);

//     })
//     .catch(e => console.log(e));


// clima.getClima(41.6024265, 0.64594)
//     .then(temp => console.log(temp))
//     .catch(e => console.log('error en la consulta', e))