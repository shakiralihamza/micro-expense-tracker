// noinspection ES6PreferShortImport
import {Expense} from "../react-app-env.d";

export default (state: any, action: any) => {
    switch(action.type) {
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense: Expense, index: number) => index !== action.payload)
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }
        case 'TOGGLE_DRAWER':
            return {
                ...state,
                drawerOpen: !action.payload
            }
        default:
            return state;
    }
}