import { LOGIN } from "./actions"

export const initialState = {userName: ''}

export const reducer = (state = initialState, action) => {
    if(action.type == LOGIN){
        return {userName: 'Ishara Sam'};
    }
    return state
}