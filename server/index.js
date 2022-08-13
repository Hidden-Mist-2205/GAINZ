// auth middleware for Userfront
// function authenticateToken(req, res, next) {
//   // eslint-disable-next-line dot-notation
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   const USERFRONT_PUBLIC_KEY = atob(process.env.USERFRONT_PUBLIC_KEY_B64);
//   // eslint-disable-next-line consistent-return
//   jwt.verify(token, USERFRONT_PUBLIC_KEY, (err, auth) => {
//     if (err) return res.sendStatus(403);
//     req.auth = auth;
//     next();
//   });
// }
