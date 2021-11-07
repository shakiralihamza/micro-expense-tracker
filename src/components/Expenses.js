import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import List from '@material-ui/core/List';
import AddExpense from "./AddExpense";
import ExpensesList from "./ExpensesList";

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
