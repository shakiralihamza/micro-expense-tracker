import React from 'react';
import AddExpense from "./AddExpense";
import ExpensesList from "./ExpensesList";
import {Container, List, Typography} from "@mui/material";

const Expenses = () => {
    return (
        <>
            <AddExpense/>
            <Container maxWidth={"sm"}>
                <Typography variant={'h4'} style={{paddingTop: 10}}>
                    Expenses
                </Typography>
                <List>
                    <ExpensesList/>
                </List>
            </Container>
        </>
    )
        ;
};

export default Expenses;
