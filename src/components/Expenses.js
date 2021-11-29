import React from 'react';
import AddExpense from "./AddExpense";
import ExpensesList from "./ExpensesList";
import {Container, Typography} from "@mui/material";
import {List} from "@mui/icons-material";

const Expenses = () => {
    return (
        <>
            <AddExpense/>
            <Container maxWidth={"sm"}>
                <Typography variant={'h4'} style={{paddingTop: 80}}>
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
