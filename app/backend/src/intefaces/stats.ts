import MatchModel from '../database/models/MatchModel';
import Teams from '../database/models/TeamModel';

export default interface Stats {
  name: string;
  totalGames: number;
  totalPoints: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  // goalsFavor: number;
  // goalsOwn: number;
  // goalsBalance: number;
  // efficiency: number;
  teams?: Teams;
  matches?: MatchModel[];
}
