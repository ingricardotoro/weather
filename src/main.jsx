import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/**FOR REDUXTOOLKIT */
import { store } from './store/store';
import { Provider } from 'react-redux';
import { Weather } from './Components/Weather';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Weather />
    </Provider>
  </React.StrictMode>
);
