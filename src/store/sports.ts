import { getSports, ISport } from '../api/sports';
import api, { IApiModel } from './api';

export interface ISportsModel extends IApiModel<ISport[]> {}

const sports: ISportsModel = {
  ...api(getSports),
};

export default sports;
