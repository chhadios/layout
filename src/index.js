import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Mainlayout from './hoc/mainlayout'
ReactDOM.render(
  <React.StrictMode>
    <Mainlayout>
    <App />
    </Mainlayout>
  </React.StrictMode>,
  document.getElementById('root')
);
