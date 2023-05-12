import express = require('express');
import validateUserLogin from '../middlewares/UserValidation';
import LoginController from '../controllers/LoginController';

const loginRoutes = express.Router();

loginRoutes.post('/', validateUserLogin, LoginController.login);

export default loginRoutes;
