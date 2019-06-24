import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const main = async () => {
  const analytics = await import('./analytics')
  analytics.init();

  const renderApp = () => ReactDOM.render(<App />, document.getElementById('root'));

  renderApp();

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}

main();