import React from 'react';

import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';


const Index = () =>{

  return(
    <App />
  )


}


ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
