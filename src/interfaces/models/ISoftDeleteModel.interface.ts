export interface ISoftDeleteModel<T> {
  deletedBy: T | string;
  deletedAt: Date;
  isDeleted: boolean;
}
