import {LOGIN, LOGOUT } from "./actions"

export const initialState = {userName: '', employees: []}

export const reducer = (state = initialState, action) => {
    if(action.type == LOGIN){
        return {isLogin:true, userName: action.payload};
    }

    if(action.type == LOGOUT){
        return {isLogin:false, userName:null };
    }

    return state
}