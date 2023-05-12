import express = require('express');
import TeamController from '../controllers/TeamController';

const teamRoutes = express.Router();

teamRoutes.get('/', TeamController.getAll);
teamRoutes.get('/:id', TeamController.getAllTeamById);

export default teamRoutes;
