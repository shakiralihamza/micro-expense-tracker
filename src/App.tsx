import React, {useReducer} from "react";
import Expenses from "./components/Expenses";
import Balance from "./components/Balance";
import AppReducer from './context/AppReducer';
import ExpensesContext from "./context/ExpensesContext";
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./components/Header";
// noinspection ES6PreferShortImport
import {Expense} from "./react-app-env.d";

const theme = createTheme({
    palette: {
        success: {
            main: '#45e576'
        },
        warning: {
            main: '#f69910'
        }
    }
});

interface InitialState {
    expenses: Expense[]
    drawerOpen: boolean
}
interface ExpensesContextType {
    expenses: string
    drawerOpen: boolean
    addExpense: (expense: Expense) => void
    deleteExpense: (index: number) => void
    toggleDrawer: (drawerOpen: boolean) => void
}

const initialState: InitialState = {
    expenses: [],
    drawerOpen: false
}

function App() {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteExpense(index: number) {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: index
        });
    }

    function addExpense(expense: Expense) {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    function toggleDrawer() {
        dispatch({
            type: 'TOGGLE_DRAWER',
            payload: state.drawerOpen
        });
    }

    const ExpensesContextValues: ExpensesContextType = {
        expenses: state.expenses,
        drawerOpen: state.drawerOpen,
        addExpense,
        deleteExpense,
        toggleDrawer
    }
    return (
        <ThemeProvider theme={theme}>
            <ExpensesContext.Provider value={ExpensesContextValues}>
                <Container maxWidth={"sm"}>
                    <CssBaseline/>
                    <Header/>
                    <Balance/>
                    <Expenses/>
                </Container>
            </ExpensesContext.Provider>
        </ThemeProvider>
    );
}

export default App;
