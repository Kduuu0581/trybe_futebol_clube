import { DataTypes, Model } from 'sequelize';
import db from '.';
import Teams from './TeamModel';

class MatchModel extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'teams',
      key: 'id',
    },
    field: 'home_team_id',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'teams',
      key: 'id',
    },
    field: 'away_team_id',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'in_progress',
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

MatchModel.belongsTo(Teams, {
  foreignKey: 'homeTeamId',
  as: 'homeTeam',
});

MatchModel.belongsTo(Teams, {
  foreignKey: 'awayTeamId',
  as: 'awayTeam',
});

export default MatchModel;
