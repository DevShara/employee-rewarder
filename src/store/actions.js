export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const EMPLOYEE_RATED = 'EMPLOYEE_RATED';
export const VOTE_OVER = 'VOTE_OVER';


export const login = (user) => {
    return {type: LOGIN, payload: user };
}

export const logout = () => {
    return {type: LOGOUT };
}

export const rateEmployee = (empId, vote) => {
    return {type: EMPLOYEE_RATED, payload: {empId, vote}}
}

export const voteOver = (empId) => {
    return {type: VOTE_OVER, payload: empId}
}