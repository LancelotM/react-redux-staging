'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import createStoreWithMdware from './store/index';
import {hashHistory,Router} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import routes from './routes';
import reducers from './reducers';
import './index.scss'

const store = createStoreWithMdware(reducers);
const history = syncHistoryWithStore(hashHistory, store);

render();

function render(){
	ReactDom.render(
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>,
		document.getElementById('container')
	);
}