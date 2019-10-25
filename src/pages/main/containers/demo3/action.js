import {nameSpace} from 'utils/index';
let ns = nameSpace('demo3');
export const ADD = ns("ADD")
export const ALL_CLEAR = ns("ALL_CLEAR");
export const num = ns('num');

export function addNum(val){
    return (dispatch,getState) =>{
        dispatch({
            type:ADD,
            data:{
                [num]:val+1
            }
        })
    }
}

export function clearNum(){
    return (dispatch,getState) =>{
        dispatch({
            type:ALL_CLEAR
        })
    }
}

