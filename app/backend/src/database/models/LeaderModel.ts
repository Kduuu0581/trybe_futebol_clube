import Stats from '../../intefaces/stats';
import MatchModel from './MatchModel';
import Teams from './TeamModel';
import TeamStatsModel from './TeamStatsModel';

export default class LeaderBoard {
  private _teams: Teams[];
  private _matches: MatchModel[];
  private _board: Stats[];

  constructor(teams: Teams[], matches: MatchModel[]) {
    this._matches = matches;
    this._teams = teams;
    this._board = this.createBoard();
  }

  public get board(): Stats[] {
    return this._board;
  }

  public createBoard() {
    return this._teams.map((match) => {
      const stats = new TeamStatsModel(match, this._matches);
      const { matches, team, ...rest } = stats;
      return rest;
    });
  }
}
