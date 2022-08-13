import Userfront from '@userfront/react';
import axios from 'axios';

Userfront.init('XXX');

// Headers needed for Userfront to work
async function sampleReq() {
  const res = await axios.get('/endpoint', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  });

  console.log(res);
}

export { sampleReq };
