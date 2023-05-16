import express = require('express');
import MatchModel from '../database/models/MatchModel';
import LeaderboardController from '../controllers/LeaderboardController';
import LeaderBoardService from '../services/LeaderboardService';
import Teams from '../database/models/TeamModel';

const leaderboardService = new LeaderBoardService(MatchModel, Teams);
const leaderboardController = new LeaderboardController(leaderboardService);

const leaderboardRoutes = express.Router();

leaderboardRoutes.get('/home', leaderboardController.getHomeTeam);
leaderboardRoutes.get('/away', leaderboardController.getAwayTeam);

export default leaderboardRoutes;
