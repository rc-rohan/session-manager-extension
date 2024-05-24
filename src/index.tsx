import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import App from './App';

// import { App } from './App';

const CONTAINER = document.getElementById('root')!

const root = ReactDOM.createRoot(CONTAINER);
root.render(<App/>);
