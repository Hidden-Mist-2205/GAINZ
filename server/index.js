require('dotenv').config();
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();

// auth middleware for Userfront
function authenticateToken(req, res, next) {
  // eslint-disable-next-line dot-notation
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  const USERFRONT_PUBLIC_KEY = atob(process.env.USERFRONT_PUBLIC_KEY_B64);
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

app.get('*', (req, res) => {
  res.sendfile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});