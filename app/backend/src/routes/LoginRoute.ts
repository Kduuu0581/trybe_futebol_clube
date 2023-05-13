import express = require('express');
// import validateToken from '../middlewares/validateToken';
import validateUserLogin from '../middlewares/UserValidation';
import LoginController from '../controllers/LoginController';

const loginRoutes = express.Router();

loginRoutes.post('/', validateUserLogin, LoginController.login);
// loginRoutes.get('/role', validateToken, LoginController.userRole);

export default loginRoutes;
