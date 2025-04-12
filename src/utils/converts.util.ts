import { IQueries } from '../interfaces/apis';
import { TTime } from '../types';

// Convert Space (ROM, RAM)
export const convertKbToByte = (value: number) => 1024 * value;

export const convertMBToByte = (value: number) => 1024 * 1024 * value;

// Convert Time
export const convertDayVN = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};

export function convertTimeToMilisecond({
  typeTime,
  value,
}: {
  typeTime: TTime;
  value: number;
}): number {
  if (typeTime === 'MILLISECONDS') {
    return value;
  }
  if (typeTime === 'SECOND') {
    return value * 1000;
  }
  if (typeTime === 'MINUTE') {
    return value * 60 * 1000;
  }
  if (typeTime === 'HOUR') {
    return value * 60 * 60 * 1000;
  } else if (typeTime === 'DAY') {
    return value * 24 * 60 * 60 * 1000;
  }
  return 1000;
}

export function convertBinaryToDecimal(numberStringBinary: string): number {
  return parseInt(numberStringBinary, 2);
}

export function convertOrderByMySql(col: string, dir: string) {
  return { [col]: dir };
}

export const convertToLatinize = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export function convertCurrency() {}

export function convertConditionCommon<T>(queries: IQueries) {
  let isDeleted = false;
  if (
    queries.isDeleted &&
    queries.isDeleted.toString().toLowerCase() === 'true'
  ) {
    isDeleted = true;
  }
  const condition: Record<keyof T | any, string | boolean> = {
    isDeleted,
  };
  if (queries.searchBy && queries.searchVal) {
    condition[queries.searchBy] = queries.searchVal;
  }
  if (queries.filterBy && queries.filterVal) {
    condition[queries.filterBy] = queries.filterVal;
  }
  if (queries.searchBy && queries.searchVal) {
    condition[queries.searchBy] = queries.searchVal;
  }
  return condition;
}

export const convertObjToQueriesString = (
  queries?: IQueries,
  defaultLimit: string = '10',
  defaultPage: string = '1'
) => {
  const objSearchParams = queries || ({} as IQueries);

  if (!objSearchParams.limit) {
    objSearchParams.limit = defaultLimit;
  }
  if (!objSearchParams.page) {
    objSearchParams.page = defaultPage;
  }

  const stringQueries =
    '?' +
    Object.keys(objSearchParams)
      .map((key) => `${key}=${objSearchParams[key]}`)
      .join('&');

  return stringQueries;
};
