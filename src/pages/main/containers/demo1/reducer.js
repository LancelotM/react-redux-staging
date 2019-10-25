import * as actions from './action.js';

var initialState = {
	json:{
        [actions.num]:0, //搜索类型
    },
    display:'none'
};

export default (state = initialState, action) => {
	let data = action.data;
	switch (action.type) {
		case actions.ADD:
            return {
                json:Object.assign({},state.json,data)
            }
        case actions.ALL_CLEAR:
            data = {[actions.num]:0}
            return {
                json:Object.assign({},state.json,data),
                display:state.display
            }
		default:
		  return state;
	}
}
