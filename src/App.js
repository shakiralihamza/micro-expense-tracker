import React, {useReducer} from "react";

import Expenses from "./components/Expenses";
import Balance from "./components/Balance";
import AppReducer from './context/AppReducer';
import ExpensesContext from "./context/ExpensesContext";
import {Container, CssBaseline} from "@mui/material";
import Header from "./components/Header";

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
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                <Header/>
                <Balance/>
                <Expenses/>
            </Container>
        </ExpensesContext.Provider>

    );
}

export default App;
