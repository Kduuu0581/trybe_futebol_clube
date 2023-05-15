import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  _service: MatchService;

  constructor(service: MatchService) {
    this._service = service;
  }

  getAll = async (_req: Request, res: Response) => {
    const allMatches = await this._service.getAll();
    return res.status(200).json(allMatches);
  };
}
