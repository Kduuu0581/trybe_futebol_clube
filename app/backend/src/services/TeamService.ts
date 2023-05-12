import Teams from '../database/models/indexModel';
import TeamModel from '../database/models/TeamModel';

async function getAll(): Promise<Teams[]> {
  const teams = await TeamModel.findAll();
  return teams;
}

async function getAllTeamById(id: number) {
  const teams = await TeamModel.findByPk(id);
  return teams;
}

export default {
  getAll,
  getAllTeamById,
};
