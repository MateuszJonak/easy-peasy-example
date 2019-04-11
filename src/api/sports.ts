import { IEndpoint } from '../api';

export interface ISport {
  id: number;
  name: string;
}

export const getSports: IEndpoint = (params: RequestInit = {}) =>
  fetch('http://www.mocky.io/v2/5bcdd3942f00002c00c855ba', {
    method: 'GET',
    ...params,
  }).then(res => res.json());
