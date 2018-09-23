import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';
import reducer from 'reducers/counters';

const store = createStore(reducer);

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp store={store} />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]'),
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    renderApp(NextApp);
  });
}
