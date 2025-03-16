import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEnMessages from "./locales/en";
import localeEsMessages from "./locales/es";
import { IntlProvider } from 'react-intl';

// Detectar el idioma del navegador
const language = navigator.language.split(/[-_]/)[0]; // Obtener el código del idioma (e.g., 'en', 'es')

// Seleccionar los mensajes correspondientes al idioma detectado
const messages = language === 'es' ? localeEsMessages : localeEnMessages;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={language} messages={messages}>
    <App />
  </IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
