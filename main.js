const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const geocode = require('./geocode');
const weather = require('./weather');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', async (req, res) => {
  const city = req.body.place;
  const loc = await geocode.geo(city);
  const weath = await weather.wt(loc[1], loc[2]);
  res.render('result', { location: loc[0], weather: weath[0] });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
