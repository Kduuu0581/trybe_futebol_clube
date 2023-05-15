import express = require('express');
import Teams from '../database/models/TeamModel';
import MatchModel from '../database/models/MatchModel';
import MatchController from '../controllers/MatchController';
import MatchesService from '../services/MatchService';
import validateToken from '../middlewares/validateToken';
import validateTeams from '../middlewares/validateTeam';

const matchesService = new MatchesService(MatchModel, Teams);
const matchController = new MatchController(matchesService);

const matchRoutes = express.Router();

matchRoutes.get('/', matchController.getAllMatches);
matchRoutes.post('/', validateToken, validateTeams, matchController.createMatch);
matchRoutes.patch('/:id', validateToken, matchController.updateMatch);
matchRoutes.patch('/:id/finish', validateToken, matchController.getById);

export default matchRoutes;
