import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY || "",
  authDomain: "coder-react-ffddb.firebaseapp.com",
  projectId: "coder-react-ffddb",
  storageBucket: "coder-react-ffddb.appspot.com",
  messagingSenderId: "406513411356",
  appId: "1:406513411356:web:b522e1dc82f60bd70546d9",
  measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID || " ",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
