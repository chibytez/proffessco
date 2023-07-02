import express from 'express';
import passport from 'passport';
import { signupController, signupVerifyController } from '../../controllers';
import signupValidator from '../../validation/signup';
import signupVerifyMiddleware from '../../middlewares';
import loginValidation from '../../validation/userValidation';
import UserController from '../../controllers/userController';
import passportSetup from '../../config/passport'; // eslint-disable-line no-unused-vars


const authRouter = express.Router();

const { login } = UserController;

authRouter.post('/signup', signupValidator, signupController);

authRouter.put('/verify/:token', signupVerifyMiddleware, signupVerifyController);

authRouter.post('/login', loginValidation, login);

authRouter.get(
  '/google/login',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);



export default authRouter;
