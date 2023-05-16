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

    const newboard = new LeaderBoard(leaderboardHomeTeams, leaderboardHomeMatches);
    const result = newboard.createBoard();
    const sorted = result.sort((a, b) => {
      if (a.totalPoints > b.totalPoints) { return -1; }
      if (a.totalPoints < b.totalPoints) { return 1; }

      if (a.totalVictories > b.totalVictories) { return -1; }
      if (a.totalVictories < b.totalVictories) { return 1; }

      if (a.goalsBalance > b.goalsBalance) { return -1; }
      if (a.goalsBalance < b.goalsBalance) { return 1; }

      if (a.goalsFavor > b.goalsFavor) { return -1; }
      if (a.goalsFavor < b.goalsFavor) { return 1; }

      return 0;
    });
    return sorted;
  };

  getAwayTeam = async () => {
    const leaderboardHomeTeams = await this.teamModel.findAll();
    const leaderboardHomeMatches = await this.matchModel.findAll();

    const newBoard = new AwayLeader(leaderboardHomeTeams, leaderboardHomeMatches);
    const result = newBoard.createBoard();
    const sortedaway = result.sort((a, b) => {
      if (a.totalPoints < b.totalPoints) { return -1; }
      if (a.totalPoints > b.totalPoints) { return 1; }

      if (a.totalVictories < b.totalVictories) { return -1; }
      if (a.totalVictories > b.totalVictories) { return 1; }

      if (a.goalsBalance < b.goalsBalance) { return -1; }
      if (a.goalsBalance > b.goalsBalance) { return 1; }

      if (a.goalsFavor < b.goalsFavor) { return -1; }
      if (a.goalsFavor > b.goalsFavor) { return 1; }

      return 0;
    });
    return sortedaway;
  };
}
