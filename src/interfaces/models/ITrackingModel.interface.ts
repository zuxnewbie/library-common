export interface ITrackingModel<T> {
  createdBy: T | string;

  updatedBy?: T | string;
}
