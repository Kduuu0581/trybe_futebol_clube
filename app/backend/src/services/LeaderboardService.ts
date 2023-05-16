import { ModelStatic } from 'sequelize';
import TeamModel from '../database/models/TeamModel';
import MatchModel from '../database/models/MatchModel';
import LeaderBoard from '../database/models/LeaderModel';
import AwayLeader from '../database/models/AwayLeaderModel';

export default class LeaderBoardService {
  matchModel: ModelStatic<MatchModel>;
  teamModel: ModelStatic<TeamModel>;

  constructor(matchModel: ModelStatic<MatchModel>, teamModel: ModelStatic<TeamModel>) {
    this.matchModel = matchModel;
    this.teamModel = teamModel;
  }

  getHomeTeam = async () => {
    const leaderboardHomeTeams = await this.teamModel.findAll();
    const leaderboardHomeMatches = await this.matchModel.findAll();
    const newBoard = new LeaderBoard(leaderboardHomeTeams, leaderboardHomeMatches);
    return newBoard.createBoard();
  };

  getAwayTeam = async () => {
    const leaderboardAwayTeams = await this.teamModel.findAll();
    const leaderboardAwayMatches = await this.matchModel.findAll();
    const newBoard = new AwayLeader(leaderboardAwayTeams, leaderboardAwayMatches);
    return newBoard.createBoard();
  };
}
