import React from 'react';
import ReactDOM from "react-dom";
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from './reducers/';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
		todoApp,
		compose(
			applyMiddleware(thunk, promise, logger),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
    document.getElementById('app')
);
