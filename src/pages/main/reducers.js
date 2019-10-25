'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {Demo1} from './reducers/demo1';
import {Demo2} from './reducers/demo2';
import {Demo3} from './reducers/demo3';

const rootReducer = combineReducers({
	Demo1,
	Demo2,
	Demo3,
	routing: routerReducer
})
export default rootReducer;