import express from 'express';
import authRouter from './auth';
import profileRoute from './profile';


const usersRouter = express.Router();


usersRouter.use('/v1/auth', authRouter);



usersRouter.get('/', (req, res) => res.status(200).send('Welcome to Shadowcat API'));

usersRouter.use('/v1/users/profile', profileRoute);

usersRouter.use((req, res) => {
  res.status(404).json({
    message: 'Not Found'
  });
});


export default usersRouter;
