import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
/*const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);*/
registerServiceWorker();