import { Router } from 'express';
import ProfileController from '../../controllers/profileController';
 import Authentication from '../../middlewares/auth';


const profileRoute = Router();
 
profileRoute.get('/',Authentication.authenticate, ProfileController.getProfile);
profileRoute.get('/users', Authentication.authenticate, Authentication.isAdmin, ProfileController.getAllProfiles)
profileRoute.put('/', Authentication.authenticate, ProfileController.updateProfile);
profileRoute.put('/admin/user/:id', Authentication.authenticate, Authentication.isAdmin, ProfileController.adminUpdateProfile);
profileRoute.get('/admin/user/:id', Authentication.authenticate, Authentication.isAdmin, ProfileController.adminGetProfile);


export default profileRoute;
