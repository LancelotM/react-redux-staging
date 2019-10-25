import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './action.js';
let num = actions.num;

class Demo3 extends React.Component {
	constructor(props) {
        super(props);
		this.clearNum = this.clearNum.bind(this);
    }
    clearNum(){
    	const {actions} = this.props;
    	actions.clearNum();
    }
	render() {
		const {actions, json} = this.props;
		console.log('demo3 render');
		return(
			<div>
				<h1 onClick={()=>{actions.addNum(json[num])}}>我是demo3 我被点了 {json[num]} 次</h1>
				<button onClick={()=>{this.clearNum()}}>归零</button>
			</div>
		)
	}
}
export default connect(
    state=>Object.assign(state.Demo3),
    dispatch=>({
		actions:bindActionCreators(actions,dispatch)
    })
)(Demo3);