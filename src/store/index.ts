import { createStore, createTypedHooks } from 'easy-peasy';
import model, { IStoreModel } from './model';

const { useActions, useStore, useDispatch } = createTypedHooks<IStoreModel>();

export { useActions, useDispatch, useStore };

const store = createStore(model);

export default store;
