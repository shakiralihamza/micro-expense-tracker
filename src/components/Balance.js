import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from "@material-ui/core";
import ExpensesContext from "../context/ExpensesContext";

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        height: 50,
        color: "black",
        backgroundColor: 'rgba(255,255,255,0.92)',
    },
});

const Balance = () => {
    const classes = useStyles();
    const {expenses} = useContext(ExpensesContext);
    const amounts = expenses.map(expense => expense.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        < >
            <Grid
                container
                className={classes.root}
                alignItems={"center"}
                justify={"center"}
            >
                <Grid item>
                    <Typography variant={'h5'}>
                        BALANCE: {total<0 ? '-':''}${Math.abs(total)}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Balance;
