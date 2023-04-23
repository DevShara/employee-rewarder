import {LOGIN, LOGOUT, EMPLOYEE_RATED, VOTE_OVER } from "./actions"

export const initialState = 


{user: '',  isLogin:false, employees: [
    {name: "Ishara Samuditha", designation: "Graphic Designer", empId: 100, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 25, voteAvailable:true, suggestions: [], contributions: []},
    {name: "Ishara Samuditha", designation: "Graphic Designer", empId: 101, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 26, voteAvailable:true, suggestions: [], contributions: []},
    {name: "Ishara Samuditha", designation: "Graphic Designer", empId: 102, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 50, voteAvailable:true, suggestions: [], contributions: []},
    {name: "Ishara Samuditha", designation: "Graphic Designer", empId: 103, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 35, voteAvailable:true, suggestions: [], contributions: []},
    {name: "Ishara Samuditha", designation: "Graphic Designer", empId: 104, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 85, voteAvailable:true, suggestions: [], contributions: []},
    {name: "Ishara Samuditha", designation: "Graphic Designer", empId: 105, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 95, voteAvailable:true, suggestions: [], contributions: []},
    {name: "Ishara Samuditha", designation: "Graphic Designer", empId: 106, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 15, voteAvailable:true, suggestions: [], contributions: []},

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