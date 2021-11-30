import React from 'react';
import AddExpense from "./AddExpense";
import ExpensesList from "./ExpensesList";
import {List} from "@mui/material";

const Expenses = () => {
    return (
        <>
            <AddExpense/>

            <List dense disablePadding>
                <ExpensesList/>
            </List>
        </>
    )
        ;
};

export default Expenses;
