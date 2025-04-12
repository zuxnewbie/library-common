export interface ISessionOtp<IType = any, IData = any> {
  type: IType;
  data: IData;
  otp: string;
  isConfirm: boolean;
}
