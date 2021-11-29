import React, {useContext} from 'react';
import ExpensesContext from "../context/ExpensesContext";
import {Grid, Typography} from "@mui/material";


const Balance = () => {
    const {expenses} = useContext(ExpensesContext);
    const amounts = expenses.map(expense => expense.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        < >
            <Grid
                container
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    height: 50,
                    color: "black",
                    backgroundColor: 'rgba(255,255,255,0.92)',
                }}
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
