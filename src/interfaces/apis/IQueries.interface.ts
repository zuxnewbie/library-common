import { TDirectionSort } from '../../types';

export interface IQueries<TFieldSelected = any> {
  limit?: string;
  page?: string;
  sortBy?: string;
  sortChildrenBy?: string;
  sortDir?: string | TDirectionSort;
  searchBy?: string;
  searchVal?: string;
  filterBy?: string;
  filterVal?: string;
  isDeleted?: string | boolean;
  fieldsSelected?: Array<keyof TFieldSelected> | any;
  [key: string]: string | number | boolean | any;
}
