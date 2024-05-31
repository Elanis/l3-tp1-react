import React from 'react';
import ReactDOM from 'react-dom/client';

import { CounterContextProvider } from './contexts/CounterContext';

import Router from './components/Router';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CounterContextProvider>
			<Router />
		</CounterContextProvider>
	</React.StrictMode>,
);
