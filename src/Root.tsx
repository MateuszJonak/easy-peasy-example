import { StoreProvider } from 'easy-peasy';
import React from 'react';
import App from './frames/App';
import store from './store';

const Root = () => (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);

export default Root;
