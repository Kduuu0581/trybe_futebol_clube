import Teams from '../database/models/indexModel';
import TeamModel from '../database/models/TeamModel';

async function getAll(): Promise<Teams[]> {
  const teams = await TeamModel.findAll();
  return teams;
}

export default { getAll };
