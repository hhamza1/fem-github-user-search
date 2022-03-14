import React, {useContext} from 'react';

import { ThemeContext } from './contexts/ThemeContext';

import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';


const Index = () =>{
  const {isDark} = useContext(ThemeContext);

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
