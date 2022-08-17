import Userfront from '@userfront/react';
import axios from 'axios';

Userfront.init('rbvr4mqb');

async function getWorkouts() {
  const data = await axios.get('/getAllWorkouts', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  });
  return data;
}

async function getExercises() {
  const data = await axios.get('/getAllExercises', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  });
  return data;
}

export { getWorkouts, getExercises };
