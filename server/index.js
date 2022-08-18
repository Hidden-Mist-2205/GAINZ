require('dotenv').config();
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
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

app.post('/sendRequest', authenticateToken, async (req, res) => {
  const requester = await controllers.getAllUserData(req.auth.userId);
  const requestee = await controllers.getAllUserData(req.body.toUser);

  const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM_ADDRESS, // sender address
    to: requestee.email, // list of receivers
    subject: `${requester.user_name} has sent you a request on GAINZ.`, // Subject line
    text: `
    ${requester.user_name} would like to connect with you on GAINZ. If you would like to connect with them, see the information below:
    Email: ${requester.email}
    Phone Number: ${requester.phone_num}
    Zoom Profile: ${requester.zoom_profile}
    `, // plain text body
  });

  res.send('Request Sent');
});

app.get('/getAvailableBuddies', authenticateToken, async (req, res) => {
  try {
    const buddies = await controllers.getAvailableBuddies(req.auth.userId, req.query.day, req.query.zipCode);
    res.json(buddies);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.post('/addAvailableDays', authenticateToken, async (req, res) => {
  try {
    const availableDays = await controllers.addAvailableDays(req.auth.userId, req.body);
    res.json(availableDays);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/getAvailableDays', authenticateToken, async (req, res) => {
  try {
    const availableDays = await controllers.getAvailableDays(req.auth.userId);
    res.json(availableDays);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

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
    if (userData.days === null) {
      userData.days = [];
    }
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/getAllUserInfo', authenticateToken, async (req, res) => {
  try {
    const userData = await controllers.getAllUserData(req.auth.userId);
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
app.get('/getFavoritedExercises', authenticateToken, async (req, res) => {
  try {
    const favoriteData = await controllers.getFavoritedExercises(req.auth.userId);
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
    await controllers.toggleFavoritedWorkout(req.body.workoutId, req.auth.userId);
    res.status(204).send('Favorited');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating data');
  }
});
app.put('/putFavoriteExercise', authenticateToken, async (req, res) => {
  try {
    await controllers.toggleFavoritedExercise(req.body.exerciseId, req.auth.userId);
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

app.put('/updateWorkoutCompletion', authenticateToken, async (req, res) => {
  try {
    await controllers.updateWorkoutCompletion(
      req.body.userId,
      req.body.workoutId,
      req.body.finishCount,
      req.body.completeTime,
    );
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching completed workouts');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
