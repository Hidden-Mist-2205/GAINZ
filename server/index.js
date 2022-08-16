require('dotenv').config();
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const controllers = require('../database/controllers');

const app = express();

// auth middleware for Userfront
// eslint-disable-next-line consistent-return
function authenticateToken(req, res, next) {
  // eslint-disable-next-line dot-notation
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  // const USERFRONT_PUBLIC_KEY = atob(process.env.USERFRONT_PUBLIC_KEY_B64);
  const buffer = Buffer.from(process.env.USERFRONT_PUBLIC_KEY_B64, 'base64');
  const USERFRONT_PUBLIC_KEY = buffer.toString('ascii');
  // eslint-disable-next-line consistent-return
  jwt.verify(token, USERFRONT_PUBLIC_KEY, (err, auth) => {
    if (err) return res.sendStatus(403);
    req.auth = auth;
    next();
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/getWorkout', authenticateToken, async (req, res) => {
  try {
    const workout = await controllers.getWorkout(req.query.workoutId, req.auth.userId);
    res.json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/getAllWorkouts', authenticateToken, async (req, res) => {
  try {
    const workouts = await controllers.getAllWorkouts(req.auth.userId);
    res.json(workouts);
  } catch (error) {gi
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/getAllExercises', authenticateToken, async (req, res) => {
  try {
    const exercises = await controllers.getAllExercises();
    res.json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/getUserInfo', authenticateToken, async (req, res) => {
  try {
    const userData = await controllers.getUserData(req.auth.userId);
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/getCompletedWorkouts', authenticateToken, async (req, res) => {
  try {
    const completedWorkouts = await controllers.getCompletedWorkouts(req.auth.userId);
    res.json(completedWorkouts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching completed workouts');git
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
