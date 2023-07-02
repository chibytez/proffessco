import ResponseGenerator from '../utils/response.util';
import models from '../models';

const { Users } = models;
const response = new ResponseGenerator();

/**
 * @exports ProfileController
 * @class ProfileController
 * @description Handles User Profile
 */
class ProfileController {
   /**
   * @static
  * @param  {object} req - Request object
  * @param {object} res - Response object
  * @param {object} next The next middleware
  * @return {json} Returns json object
   */
    static async getProfile(req, res, next) {
        try {
            const { id } = req;
            const user = await Users.findOne({
              where: { userId: id }
            });
            if (!user) {
              return response.sendError(
                res,
                404,
                'user not found'
               );
            }
            return response.sendSuccess(
              res,
              200,
              {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                userId: user.userId,
                email: user.email,
                gmail: user.gmail,
                facebook: user.facebook,
                phone: user.phone,
                status: user.status,
                isAdmin: user.isAdmin,
                gender: user.gender,
                birthday: user.birthday,
                address: user.address
              },
              'success',
            );
          } catch (error) {
            next(error);
          }
        }

         /**
   * @static
  * @param  {object} req - Request object
  * @param {object} res - Response object
  * @param {object} next The next middleware
  * @return {json} Returns json object
   */
    static async getAllProfiles(req, res, next) {
        try {
           
            const user = await Users.findAll();
            if (!user) {
              return response.sendError(
                res,
                404,
                'user not found'
              );
            }

            return response.sendSuccess(
              res,
              200,
              {
                  user
              },
              'success',
            );
          } catch (error) {
            next(error);
          }
    }


    /**
  * Update user profile
  * @async
  * @param  {object} req - Request object
  * @param {object} res - Response object
  * @param {object} next The next middleware
  * @return {json} Returns json object
  * @static
  */
  static async updateProfile(req, res, next) {
    try {
      if (Object.keys(req.body).length === 0) {
        response.sendError(
          res,
          400,
          'request body is empty'
        );
      }
      const { id } = req;
      const profileDetails = await (req.body);
      const {
        firstname, lastname, email, phone, gmail, facebook, gender, birthday,
        address, nationality, state, lga
      } = profileDetails;
      const user = await Users.findOne({
        where: { userId: id }
      });
      if (user !== undefined) {
        const updatedDetails = await user.update({
          firstname,
          lastname,
          email,
          phone,
          gmail,
          facebook,
          gender,
          birthday,
          address
        });
        return response.sendSuccess(
          res,
          200,
          {
            id: updatedDetails.id,
            firstname: updatedDetails.firstname,
            lastname: updatedDetails.lastname,
            userId: updatedDetails.userId,
            email: updatedDetails.email,
            gmail: updatedDetails.gmail,
            phone: updatedDetails.phone,
            facebook: updatedDetails.facebook,
            status: updatedDetails.status,
            isAdmin: updatedDetails.isAdmin,
            gender: updatedDetails.gender,
            birthday: updatedDetails.birthday,
            address: updatedDetails.address,
            currency: updatedDetails.currency
          },
          'profile sucessfully updated',
        );
      }
      return response.sendError(
        res,
        404,
        'user does not exist'
      );
    } catch (error) {
      next(error);
    }
  }


    /**
  * Admin Update user profile
  * @async
  * @param  {object} req - Request object
  * @param {object} res - Response object
  * @param {object} next The next middleware
  * @return {json} Returns json object
  * @static
  */
     static async adminUpdateProfile(req, res, next) {
        try {
          if (Object.keys(req.body).length === 0) {
            response.sendError(
              res,
              400,
              'request body is empty'
            );
          }
          const { id } = req.params;
          const profileDetails = await (req.body);
          const {
            firstname, lastname, email, phone, gmail, facebook, gender, birthday, status, isAdmin,
            address, nationality, state, lga
          } = profileDetails;
          const user = await Users.findOne({
            where: { id }
          });
          if (user !== undefined) {
            const updatedDetails = await user.update({
              firstname,
              lastname,
              email,
              phone,
              gmail,
              facebook,
              gender,
              birthday,
              status,
              isAdmin,
              address
            });
            return response.sendSuccess(
              res,
              200,
              {
                id: updatedDetails.id,
                firstname: updatedDetails.firstname,
                lastname: updatedDetails.lastname,
                userId: updatedDetails.userId,
                email: updatedDetails.email,
                gmail: updatedDetails.gmail,
                phone: updatedDetails.phone,
                facebook: updatedDetails.facebook,
                status: updatedDetails.status,
                isAdmin: updatedDetails.isAdmin,
                gender: updatedDetails.gender,
                birthday: updatedDetails.birthday,
                address: updatedDetails.address,
                currency: updatedDetails.currency,
              },
              'profile sucessfully updated',
            );
          }
          return response.sendError(
            res,
            404,
            'user does not exist'
          );
        } catch (error) {
          next(error);
        }
      }
    
  /**
   * @static
  * @param  {object} req - Request object
  * @param {object} res - Response object
  * @param {object} next The next middleware
  * @return {json} Returns json object
   */
   static async adminGetProfile(req, res, next) {
    try {
        const { id } = params;
        console.log('user:',id);
        const user = await Users.findOne({
          where: { userId: id }
        });
        if (!user) {
          return response.sendError(
            res,
            404,
            'user not found'
           );
        }
        return response.sendSuccess(
          res,
          200,
          {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            userId: user.userId,
            email: user.email,
            gmail: user.gmail,
            facebook: user.facebook,
            phone: user.phone,
            status: user.status,
            isAdmin: user.isAdmin,
            gender: user.gender,
            birthday: user.birthday,
            address: user.address
          },
          'success',
        );
      } catch (error) {
        next(error);
      }
    }   

      

}

export default ProfileController;
