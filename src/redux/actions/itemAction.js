import {REFRESH,ADDITEM} from "../constant";

export const refreshItem = data => ({type:REFRESH,data})
export const addItem = data => ({type:ADDITEM,data})