import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

const getAll = async (_req: Request, res: Response) => {
  const teams = await TeamService.getAll();
  return res.status(200).json(teams);
};

const getAllTeamById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await TeamService.getAllTeamById(Number(id));
  return res.status(200).json(team);
};

export default {
  getAll,
  getAllTeamById,
};
