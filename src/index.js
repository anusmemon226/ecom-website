import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './state/ReduxStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/util';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </Provider>
);
