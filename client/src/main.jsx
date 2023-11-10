import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './libs/redux/store.js';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./Translations/Es/global.json"
import global_en from "./Translations/En/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <I18nextProvider i18n={i18next}>
        <App />
        </I18nextProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  )
  