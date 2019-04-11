import sports, { ISportsModel } from './sports';

export interface IStoreModel {
  sports: ISportsModel;
}

const model: IStoreModel = {
  sports,
};

export default model;
