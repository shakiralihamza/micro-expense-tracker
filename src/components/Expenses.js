import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Container, Fade} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ExpensesMenu from "./ExpensesMenu";

import ExpensesList from "./ExpensesList";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: '5px'
    },
    tabs: {
        minHeight: '0',
        margin: 0
    },
    inline: {
        display: 'inline'
    },
    root2: {
        width: '100%',
        paddingBottom: '80px',
        margin: 'auto'
    }
}));

const Expenses = () => {
    const classes = useStyles();

    // const [expenses, setExpenses] = React.useState([]);


    return (
            <Container maxWidth={"sm"}>
                <ExpensesMenu/>
                <Typography variant={'h4'} style={{paddingTop: 80}}>
                    Expenses
                </Typography>
                <List className={classes.root2}>
                    <ExpensesList/>
                </List>
            </Container>
    );
};

export default Expenses;
