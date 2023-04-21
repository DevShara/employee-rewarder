import {LOGIN, LOGOUT, EMPLOYEE_RATED, VOTE_OVER } from "./actions"

export const initialState = 


{user: '',  isLogin:false, employees: [
    {name: "First Name Last Name ", designation: "Graphic Designer", empId: 100, vote: 25, voteAvailable:true, suggestions: [], attendence: 56, "jobRes": 7, empVotes:0},
    {name: "First Name Last Name ", designation: "Graphic Designer", empId: 101, vote: 26, voteAvailable:true, suggestions: [], attendence: 56, "jobRes": 7, empVotes:0},
    {name: "First Name Last Name ", designation: "Graphic Designer", empId: 102, vote: 50, voteAvailable:true, suggestions: [], attendence: 56, "jobRes": 7, empVotes:0},
    {name: "First Name Last Name ", designation: "Graphic Designer", empId: 103, vote: 35, voteAvailable:true, suggestions: [], attendence: 56, "jobRes": 7, empVotes:0},
    {name: "First Name Last Name ", designation: "Graphic Designer", empId: 104, vote: 85, voteAvailable:true, suggestions: [], attendence: 56, "jobRes": 7, empVotes:0},
    {name: "First Name Last Name ", designation: "Graphic Designer", empId: 105, vote: 95, voteAvailable:true, suggestions: [], attendence: 56, "jobRes": 7, empVotes:0},
    {name: "First Name Last Name ", designation: "Graphic Designer", empId: 106, vote: 15, voteAvailable:true, suggestions: [], attendence: 56, "jobRes": 7, empVotes:0},

]}

// JSON.parse(localStorage.getItem('store'));


export const reducer = (state = initialState, action) => {
    if(action.type == LOGIN){
        return {...state, isLogin:true, user: action.payload};
    }
 
    if(action.type == LOGOUT){
        return {...state, isLogin:false, user:null };
    }

    if(action.type == EMPLOYEE_RATED){
        return {user:state.user, isLogin:state.isLogin,  employees: state.employees.map(item => {
            if(item.empId === action.payload.empId){
                return {...item, empId:action.payload.empId, vote:item.vote + action.payload.vote}
            }
            return item
        })
        }
    }

    if(action.type == VOTE_OVER){
        return {user:state.user, isLogin:state.isLogin,  employees: state.employees.map(item => {
            if(item.empId === action.payload){
                return {...item, voteAvailable:false}
            }
            return item
        })
        }
    }

    return state
}