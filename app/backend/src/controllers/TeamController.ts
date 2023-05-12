import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

const getAll = async (_req: Request, res: Response) => {
  const teams = await TeamService.getAll();
  return res.status(200).json(teams);
};

export default { getAll };
