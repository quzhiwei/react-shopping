
import {ADDITEM,REFRESH} from "../constant";
let init = [];


export default function itemReducer(preState=init,action){
  const {type,data}= action;
  switch (type){
    case REFRESH:
      return data;
    case ADDITEM:
      return [data,...preState]
    default:
      return preState;
  }
}