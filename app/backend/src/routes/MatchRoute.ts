import express = require('express');
import Teams from '../database/models/TeamModel';
import MatchModel from '../database/models/MatchModel';
import MatchController from '../controllers/MatchController';
import MatchesService from '../services/MatchService';
import validateToken from '../middlewares/validateToken';

const matchesService = new MatchesService(MatchModel, Teams);
const matchController = new MatchController(matchesService);

const matchRoutes = express.Router();

matchRoutes.get('/', matchController.getAllMatches);
matchRoutes.patch('/:id/finish', validateToken, matchController.getById);
matchRoutes.patch('/:id', validateToken, matchController.updateMatch);

export default matchRoutes;
