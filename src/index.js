import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Admin from './Admin';
import Home from './pages/route_demo/Home';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
