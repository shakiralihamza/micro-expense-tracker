import React, {useContext} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import {CssBaseline, Grid, InputAdornment, InputLabel, OutlinedInput, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import ExpensesContext from "../context/ExpensesContext";

const useStyles = makeStyles(() => ({
    AppBarStyle: {
        paddingTop: '15px',
        backgroundColor: 'rgba(255,255,255,0.92)',
        boxShadow: 'none',
        color: "black"
    }
}));


const ExpensesMenu = () => {
    const classes = useStyles();
    const {addExpense} = useContext(ExpensesContext);
    const [expenseAmount, setExpenseAmount] = React.useState('');
    const [expenseTitle, setExpenseTitle] = React.useState('');

    const handleAmountChange = (e) => {
        setExpenseAmount(e.target.value.match(/-?[0-9]+(\.[0-9]+)?/g, ''));

    };
    const handleTitleChange = (e) => {
        setExpenseTitle(e.target.value);
    };

    const handleAddExpense = () => {
        const newExpense = {
            title: expenseTitle,
            amount: Number(expenseAmount)
        }
        // state.setExpenses([...state.expenses, newExpense])
        addExpense(newExpense);
        setExpenseAmount('');
        setExpenseTitle('')
    }
    return (
        <>
            <CssBaseline/>
            <AppBar className={classes.AppBarStyle}>
                <Container maxWidth={"sm"}>
                    <Grid
                        container
                        direction={'row'}
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <Grid item>
                            <TextField
                                fullWidth
                                value={expenseTitle}
                                onChange={(e) => handleTitleChange(e)}
                                label="Title"
                                size={"small"}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <FormControl size={"small"} fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={expenseAmount}
                                    onChange={(e) => handleAmountChange(e)}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item onClick={handleAddExpense}>
                            <IconButton color={"primary"}>
                                <AddIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </>
    );
};

export default ExpensesMenu;
