import React from 'react';
import { Provider } from 'react-redux'
import { AuthTabs, Sign } from './routes';
import { configureStore } from './app/store/configureStore'

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Sign />
      </Provider>
    );
  }
}

