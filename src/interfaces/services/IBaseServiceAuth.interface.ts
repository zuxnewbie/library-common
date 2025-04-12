import { Request } from 'express';

export interface IBaseServiceAuth {
  login(payload: any): Promise<any>;
  logout(req: Request): Promise<boolean>;
  resetPassword(payload: any): Promise<boolean>;
  getMe(req: Request): Promise<any>;
}
