import { Request } from 'express';
import { IQueries } from '../apis';
import { RESPONSE } from '../../core/response.core';

export interface IBaseControllerCommon {
  create(payload: any, req?: Request): Promise<RESPONSE>;
  findAll?(queries: IQueries, req?: Request): Promise<RESPONSE>;
  findOneById(id: string): Promise<RESPONSE>;
  findOneBySlug?(slug: string): Promise<RESPONSE>;
  softRemove?(id: string, req: Request): Promise<RESPONSE>;
  update?(id: string, req: Request, payload: any): Promise<RESPONSE>;
  restoreMulti?({ ids }: { ids: Array<string> }): Promise<RESPONSE>;
  softRemoveMulti?(
    { ids }: { ids: Array<string> },
    req: Request
  ): Promise<RESPONSE>;
  removeMulti({ ids }: { ids: Array<string> }): Promise<RESPONSE>;
}
