import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {ReactRouters} from "./routs/Routes";
import {Provider} from "react-redux";
import {store, persistor} from './redux/store'
import './index.css';
import './i18n'
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <ReactRouters />
          </PersistGate>
      </Provider>
  </React.StrictMode>
);
