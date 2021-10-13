export default (state, action) => {
    switch(action.type) {
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense, index) => index !== action.payload)
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }
        default:
            return state;
    }
}