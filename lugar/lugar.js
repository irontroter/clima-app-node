const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyAKhlS1ug1b3wl2q8nHTK6kJZzfiX7gOI4`);

    // console.log(encodedUrl);
    // console.log(direccion);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No existeix la direcció ${direccion}`);
    }
    // else {

    let location = resp.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
    // }

}
module.exports = {
    getLugarLatLng
}