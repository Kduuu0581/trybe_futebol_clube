import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  _service: MatchService;

  constructor(service: MatchService) {
    this._service = service;
  }

  // getAll = async (_req: Request, res: Response) => {
  //   const allMatches = await this._service.getAll();
  //   return res.status(200).json(allMatches);
  // };

  getAllMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    if (inProgress) {
      const matches = await this._service.getInProgress(inProgress as string);
      return res.status(200).json(matches);
    }
    const allMatches = await this._service.getAll();
    return res.status(200).json(allMatches);
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._service.getById(Number(id) as number);
    return res.status(200).json({ message: 'Finished' });
  };

  updateMatch = async (req: Request, res: Response) => {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;
    const match = await this
      ._service.updateMatch(homeTeamGoals, awayTeamGoals, Number(id) as number);
    return res.status(200).json(match);
  };
}
