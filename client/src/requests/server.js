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

async function getAllFavWorkouts() {
  const data = await axios.get('/getFavoritedWorkouts', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  });
  return data;
}
async function getAllFavExercise() {
  const data = await axios.get('/getFavoritedExercises', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  });
  return data;
}
async function putFavoriteWorkout(workoutId) {
  const data = axios.put('/putFavoriteWorkout', { workoutId }, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  });
  return data;
}
async function putFavoriteExercise(exerciseId) {
  const data = axios.put('/putFavoriteExercise', { exerciseId }, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  });
  return data;
}
async function postNewWorkout(workout) {
  const data = axios.post('/postNewWorkout', { data: workout }, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  });
  return data;
}

export {
  getWorkouts, getExercises, getAllFavWorkouts, getAllFavExercise, putFavoriteWorkout,
  putFavoriteExercise, postNewWorkout,
};
