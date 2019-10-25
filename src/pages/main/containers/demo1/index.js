import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './action.js';
let num = actions.num;
import * as actions2 from '../demo2/action.js';
let num2 = actions2.num;
import * as actions3 from '../demo3/action.js';
let num3 = actions3.num;

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
		const {actions, demo1, demo2 ,demo3} = this.props;
		return(
			<div>
				<h1 onClick={()=>{actions.addNum(demo1.json[num])}}>我是demo1 我被点了 {demo1.json[num]} 次</h1>
				<button onClick={()=>{this.clearNum()}}>归零自己</button>
				<h1>demo2 被点了 {demo2.json[num2]} 次</h1>
				<button onClick={()=>{this.clearNum2()}}>归零demo2</button>
				<h1>demo3 被点了 {demo3.json[num3]} 次</h1>
				<button onClick={()=>{this.clearNum3()}}>归零demo3</button>
			</div>
		)
	}
}
export default connect(
    state=>{
			return {
				demo1:state.Demo1,
				demo2:state.Demo2,
				demo3:state.Demo3,
			}
		},
    dispatch=>({
		actions:bindActionCreators(actions,dispatch),
		actions2:bindActionCreators(actions2,dispatch),
		actions3:bindActionCreators(actions3,dispatch)
    })
)(Demo1);