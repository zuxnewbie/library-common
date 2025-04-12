export interface IBaseServiceOtp {
  sendOtp(payload: any): Promise<boolean>;
  confirmOtp(payload: any): Promise<boolean>;
  createSessionOtp(payload: any): Promise<boolean>;
}
