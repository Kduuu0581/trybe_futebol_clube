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
      include: [
        { model: this.teamModel, as: 'awayTeam', attributes: { exclude: ['id'] } },
        { model: this.teamModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return allMatches;
  };

  getInProgress = async (inProgress: string): Promise<MatchModel[]> => {
    const matches = await this.matchModel.findAll({
      where: { inProgress: JSON.parse(inProgress.toLocaleLowerCase()) },
      include: [
        { model: this.teamModel, as: 'awayTeam', attributes: { exclude: ['id'] } },
        { model: this.teamModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  };

  getById = async (id: number) => {
    const match = await this.matchModel.findOne({ where: { id } });
    match?.update({ inProgress: false });
  };

  updateMatch = async (bodyA: number, bodyB: number, id: number) => {
    const match = await this.matchModel.findOne({ where: { id } });
    match?.update({
      homeTeamGoals: bodyA,
      awayTeamGoals: bodyB,
    });
    return match;
  };
}
