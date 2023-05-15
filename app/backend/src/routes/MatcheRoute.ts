import express = require('express');
import Teams from '../database/models/TeamModel';
import MatchModel from '../database/models/MatchModel';
import MatchController from '../controllers/MatchController';
import MatchesService from '../services/MatchService';

const matchesService = new MatchesService(MatchModel, Teams);
const matchController = new MatchController(matchesService);

const matchRoutes = express.Router();

matchRoutes.get('/', matchController.getAll);

export default matchRoutes;
