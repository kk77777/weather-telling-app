const axios = require('axios').default;
require('dotenv').config();
const GEO = process.env.GEO_API_KEY;
async function geo(address) {
  var encodedAddress = encodeURIComponent(address);
  try {
    const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${GEO}`;
    const response = await axios.get(url);
    const place = response.data.features[0].place_name;
    const lat = response.data.features[0].geometry.coordinates[1];
    const long = response.data.features[0].geometry.coordinates[0];
    return (co = [place, lat, long]);
  } catch (error) {
    console.log(error);
  }
}

module.exports.geo = geo;
