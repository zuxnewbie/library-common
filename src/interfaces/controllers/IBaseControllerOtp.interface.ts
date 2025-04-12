import { RESPONSE } from '../../core/response.core';

export interface IBaseControllerOtp {
  createSessionOtp(payload: any): Promise<RESPONSE>;
  sendOtp(payload: any): Promise<RESPONSE>;
  confirmOtp(payload: any): Promise<RESPONSE>;
}
