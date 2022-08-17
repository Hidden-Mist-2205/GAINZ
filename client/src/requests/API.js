import axios from 'axios';

require('dotenv').config();

async function distanceBetween(location1, location2) {
  const reqUrl = `
  https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial
  &key=${process.env.GOOGLE_API_KEY}
  &origins=${location1}
  &destinations=${location2}
  `;
  const res = await axios.get(reqUrl);
  const data = res.rows[0].elements[0];
  return data;
}

// const distanceInMilesString = data.distance.text; // '88.1 miles'
// const distanceInMeters = data.distance.value; // number
// const travelTimeString = data.duration.text; // '2 hours 0 mins'
// const travelTimeInSeconds = data.duration.value; // number

// const returnValExample = {
//   destination_addresses: ['Huntington, NY 11743, USA'],
//   origin_addresses: ['Beacon, NY 12508, USA'],
//   rows: [
//     {
//       elements: [
//         {
//           distance: {
//             text: '88.1 mi',
//             value: 141821,
//           },
//           duration: {
//             text: '2 hours 0 mins',
//             value: 7212,
//           },
//           status: 'OK',
//         },
//       ],
//     },
//   ],
//   status: 'OK',
// };

export default distanceBetween;
