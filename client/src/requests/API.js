import axios from 'axios';

require('dotenv').config();

async function distanceBetween(location1, location2) {
  const reqUrl = `
  https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial
  &key=${process.env.GOOGLE_API_KEY}
  &origins=${location1}
  &destinations=${location2}
  `;
  const data = await axios.get(reqUrl);
  return data;
}

export default distanceBetween;
