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

app.get('/getAvailableBuddies', /* authenticateToken, */ async (req, res) => {
  try {
    const buddies = await controllers.getAvailableBuddies(req.query.userId);
    res.json(buddies);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.post('/addAvailableDays', /* authenticateToken, */ async (req, res) => {
  try {
    const availableDays = await controllers.addAvailableDays(req.query.userId, req.body);
    res.json(availableDays);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/getAvailableDays', /* authenticateToken, */ async (req, res) => {
  try {
    const availableDays = await controllers.getAvailableDays(req.query.userId);
    res.json(availableDays);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/getWorkout', /* authenticateToken, */ async (req, res) => {
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
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/getAllExercises', authenticateToken, async (req, res) => {
  try {
    const { count, limit } = req.query;
    console.log(count, limit);
    const exercises = await controllers.getAllExercises(count, limit);
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
app.get('/getFavoritedWorkouts', authenticateToken, async (req, res) => {
  try {
    const favoriteData = await controllers.getFavoritedWorkouts(req.auth.userId);
    res.json(favoriteData);
  } catch (error) {
    console.error(error);
  }
});
app.post('/postNewWorkout', authenticateToken, async (req, res) => {
  try {
    const createWorkout = await controllers.addNewWorkout(req.body, req.auth.userId);
    const workoutId = createWorkout[0].workout_id;
    await controllers.addUserWorkout(req.auth.userId, workoutId);
    req.body.steps.forEach(async (step, index) => {
      await controllers.addSteps(step, workoutId, index);
    });
    res.status(201).send();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error Posting Data');
  }
});
app.delete('/deleteWorkout', authenticateToken, async (req, res) => {
  try {
    await controllers.deleteWorkout(req.query, req.auth.userId);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error Deleting Data');
  }
});
app.put('/putFavoriteWorkout', authenticateToken, async (req, res) => {
  try {
    await controllers.toggleFavoritedWorkout(req.query.workoutId, req.auth.userId);
    res.status(204).send('Favorited');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating data');
  }
});
app.put('/putFavoriteExercise', authenticateToken, async (req, res) => {
  try {
    await controllers.toggleFavoritedExercise(req.query.exerciseId, req.auth.userId);
    res.status(204).send('Favorited');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating data');
  }
});
app.get('/getCompletedWorkouts', authenticateToken, async (req, res) => {
  try {
    const completedWorkouts = await controllers.getCompletedWorkouts(req.auth.userId);
    res.json(completedWorkouts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching completed workouts');
  }
});

app.post('/postUser', async (req, res) => {
  try {
    await controllers.addNewUser(req.body);
    await controllers.addAvailableDays(req.body.userId, req.body.days);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error posting new user');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
