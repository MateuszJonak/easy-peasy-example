import React, { useCallback } from 'react';
import { useActions, useStore } from '../store';

const App = () => {
  const loading = useStore(state => state.sports.loading);
  const data = useStore(state => state.sports.data);
  const testFetch = useActions(actions => actions.sports.fetch);
  const callGetTest = useCallback(() => testFetch({}), []);

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={callGetTest}>call</button>
      <div>{loading ? 'loading' : 'loaded'}</div>
      <ul>{data && data.map(value => <li key={value.id}>{value.name}</li>)}</ul>
    </div>
  );
};

export default App;
