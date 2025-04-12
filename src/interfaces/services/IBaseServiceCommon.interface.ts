import { Request } from 'express';
import { IGetManyItem, IQueries } from '../apis';

export interface IBaseServiceCommon<TInstance> {
  create({ req, payload }: { req: Request; payload: any }): Promise<TInstance>;
  findOneById(id: string): Promise<TInstance>;
  findOneBySlug?(slug: string): Promise<TInstance>;
  findAll?(queries: IQueries, req?: Request): Promise<IGetManyItem<TInstance>>;
  update?({
    id,
    req,
    payload,
  }: {
    id: string;
    req: Request;
    payload: any;
  }): Promise<boolean>;
  softRemove?({ id, req }: { id: string; req: Request }): Promise<boolean>;
  restoreMulti?(ids: Array<string>): Promise<boolean>;
  softRemoveMulti?({
    ids,
    req,
  }: {
    ids: Array<string>;
    req: Request;
  }): Promise<boolean>;
  removeMulti(ids: Array<string>): Promise<boolean>;
}
