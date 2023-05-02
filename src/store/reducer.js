import {LOGIN, LOGOUT, EMPLOYEE_RATED, VOTE_OVER, SIGNUP } from "./actions"

export const initialState = JSON.parse(localStorage.getItem('store'));



// {user: '',  isLogin:false, employees: [
//     {email: "isharasamuditha@gmail.com", name: "Ishara Sam", designation: "Graphic Designer", empId: 100, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 25, voteAvailable:true, suggestions: [], contributions: []},
//     {email: "isharasamuditha@gmail.com1", name: "Ishara Samuditha", designation: "Graphic Designer", empId: 101, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 26, voteAvailable:true, suggestions: [], contributions: []},
//     {email: "isharasamuditha@gmail.com1", name: "Ishara Samuditha", designation: "Graphic Designer", empId: 102, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 50, voteAvailable:true, suggestions: [], contributions: []},
//     {email: "isharasamuditha@gmail.com1", name: "Ishara Samuditha", designation: "Graphic Designer", empId: 103, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 35, voteAvailable:true, suggestions: [], contributions: []},
//     {email: "isharasamuditha@gmail.com1", name: "Ishara Samuditha", designation: "Graphic Designer", empId: 104, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 85, voteAvailable:true, suggestions: [], contributions: []},
//     {email: "isharasamuditha@gmail.com1", name: "Ishara Samuditha", designation: "Graphic Designer", empId: 105, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 95, voteAvailable:true, suggestions: [], contributions: []},
//     {email: "isharasamuditha@gmail.com1", name: "Ishara Samuditha", designation: "Graphic Designer", empId: 106, totalScore:0, scoreFromEmployer:0, voteFromEmployees: 15, voteAvailable:true, suggestions: [], contributions: []},

// ]}

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

    if(action.type == SIGNUP){
        return {user:state.user, isLogin:state.isLogin, employees: [...employees, {email: action.payload.email, name: action.payload.name, designation: "", empId:null , totalScore:0, scoreFromEmployer:0, voteFromEmployees: 0, voteAvailable:true, suggestions: [], contributions: []} ]}
    }

    return state
}