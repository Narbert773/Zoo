import express from 'express';
// import checkAuthRedirect from '../../middlewares/checkAuthRedirect';

const registerRouter = express.Router();

registerRouter.get('/', (req, res) => res.render('RegistrationPage'));

// authRouter.get('/login', checkAuthRedirect, (req, res) => res.render('LoginPage'));

// authRouter.get('/logout', (req, res) => res.clearCookie('accessToken').clearCookie('refreshToken').redirect('/'));

export default registerRouter;
