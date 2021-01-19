const axios = require('axios').default;
require('dotenv').config();
const weather = process.env.WEATHER_API_KEY;
async function wt(lat, lon) {
  try {
    const url = `https://api.darksky.net/forecast/${weather}/${lat},${lon}`;
    const response = await axios.get(url);
    const temp = response.data.currently.temperature;
    return (weath = [temp]);
  } catch (error) {
    console.log(error);
  }
}

module.exports.wt = wt;
