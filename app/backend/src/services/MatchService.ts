import { ModelStatic } from 'sequelize';
import Teams from '../database/models/TeamModel';
import MatchModel from '../database/models/MatchModel';

export default class MatchesService {
  matchModel: ModelStatic<MatchModel>;
  teamModel: ModelStatic<Teams>;

  constructor(matchModel: ModelStatic<MatchModel>, teamModel: ModelStatic<Teams>) {
    this.matchModel = matchModel;
    this.teamModel = teamModel;
  }

  getAll = async (): Promise<MatchModel[]> => {
    const allMatches = await this.matchModel.findAll({
      include: [{
        model: this.teamModel,
        as: 'awayTeam',
        attributes: { exclude: ['id'] },
      }, {
        model: this.teamModel,
        as: 'homeTeam',
        attributes: { exclude: ['id'] },
      }],
    });
    return allMatches;
  };
}
