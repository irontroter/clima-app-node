const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0ae2ca7ec0f350bddd595c510504ccaa`)

    return resp.data.main.temp



}


module.exports = {
    getClima
}