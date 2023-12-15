import express from 'express';
import checkAuthRedirect from '../middlewares/checkAuthRedirect';

const authRouter = express.Router();

authRouter.get('/reg', (req, res) => {
  try {
    res.render('RegistrationPage');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

authRouter.get('/login', checkAuthRedirect, (req, res) => {
  try {
    res.render('LoginPage');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

authRouter.get('/logout', (req, res) => {
  try {
    res.clearCookie('accessToken').clearCookie('refreshToken').redirect('/');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default authRouter;
