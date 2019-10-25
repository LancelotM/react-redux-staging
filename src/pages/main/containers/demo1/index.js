import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './action.js';
let num = actions.num;
import * as actions2 from '../demo2/action.js';
import * as actions3 from '../demo3/action.js';

class Demo1 extends React.Component {
	constructor(props) {
        super(props);
		this.clearNum = this.clearNum.bind(this);
		this.clearNum2 = this.clearNum2.bind(this);
		this.clearNum3 = this.clearNum3.bind(this);
    }
    clearNum(){
    	const {actions} = this.props;
    	actions.clearNum();
    }
    clearNum2(){
    	const {actions2} = this.props;
    	actions2.clearNum();
    }
    clearNum3(){
    	const {actions3} = this.props;
    	actions3.clearNum();
    }
	render() {
		const {actions, json} = this.props;
		console.log('demo1 render');
		console.log(json);
		return(
			<div>
				<h1 onClick={()=>{actions.addNum(json[num])}}>我是demo1 我被点了 {json[num]} 次</h1>
				<button onClick={()=>{this.clearNum()}}>归零自己</button>
				<button onClick={()=>{this.clearNum2()}}>归零demo2</button>
				<button onClick={()=>{this.clearNum3()}}>归零demo3</button>
			</div>
		)
	}
}
export default connect(
    state=>Object.assign(state.Demo1),
    dispatch=>({
		actions:bindActionCreators(actions,dispatch),
		actions2:bindActionCreators(actions2,dispatch),
		actions3:bindActionCreators(actions3,dispatch)
    })
)(Demo1);