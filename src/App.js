import React, {useReducer} from "react";

import Expenses from "./components/Expenses";
import Balance from "./components/Balance";
import AppReducer from './context/AppReducer';
import ExpensesContext from "./context/ExpensesContext";

const initialState = {
    expenses: []
}

function App() {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteExpense(index) {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: index
        });
    }

    function addExpense(expense) {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const ExpensesContextValues = {
        expenses: state.expenses,
        addExpense,
        deleteExpense
    }
    return (
        <ExpensesContext.Provider value={ExpensesContextValues}>
            <Expenses/>
            <Balance/>
        </ExpensesContext.Provider>

    );
}

export default App;
