import React, { Fragment } from 'react';
import { JMain } from './main';

import { Provider } from 'react-redux'
import { store } from './state/store';


export function App() {
  return (
    <Provider store={store}>
      <JMain></JMain>
    </Provider>
  );
}

export default App;
