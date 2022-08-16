import Userfront from '@userfront/react';
import axios from 'axios';

Userfront.init('rbvr4mqb');

// Headers needed for Userfront to work
async function getWorkouts() {
  const data = await axios.get('/getAllWorkouts', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  });

  return data;
}

async function otherRequest() {
  const data = await axios.get('/getAllWorkouts', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  });

  return data;
}

export { getWorkouts, otherRequest };
