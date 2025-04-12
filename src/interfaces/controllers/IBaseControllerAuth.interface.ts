import { Request, Response } from 'express';
import { RESPONSE } from '../../core/response.core';

export interface IBaseControllerAuth {
  login(payload: any, res: Response): Promise<any>;
  logout(req: Request, res: Response): Promise<any>;
  resetPassword(payload: any): Promise<RESPONSE>;
  getMe(req: Request): Promise<RESPONSE>;
}
