import AdLayout from 'components/layout/index';
import {
	Demo1,Demo2,Demo3
} from './containers/index';

const createRoutes = {
	path: '/',
	component: AdLayout,
	indexRoute: {component:Demo1 },
    childRoutes: [
    	{
    		path: 'demo1',
	        component: Demo1,
	        onEnter: (param) => {
	        },
	        onLeave: (param) => {
	        }
    	},
    	{
    		path: 'demo2',
	        component: Demo2,
	        onEnter: (param) => {
	        },
	        onLeave: (param) => {
	        }
    	},
    	{
    		path: 'demo3',
	        component: Demo3,
	        onEnter: (param) => {
	        },
	        onLeave: (param) => {
	        }
    	}
    ]
}
export default createRoutes