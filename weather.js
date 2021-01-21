const axios = require('axios').default;
require('dotenv').config();
const weather = process.env.WEATHER_API_KEY;
async function wt(lat, lon) {
  try {
    const url = `https://api.darksky.net/forecast/${weather}/${lat},${lon}`;
    const response = await axios.get(url);
    console.log(response.data);
    let temp = response.data.currently.temperature;
    temp = ((temp - 32) * 5) / 9;
    temp = temp.toFixed(2);
    let prec = response.data.currently.precipProbability;
    prec *= 100;
    let humidity = response.data.currently.humidity;
    humidity *= 100;
    humidity = humidity.toFixed(2);
    let wind = response.data.currently.windSpeed;
    return (weath = [temp, prec, humidity, wind]);
  } catch (error) {
    console.log(error);
  }
}

module.exports.wt = wt;
