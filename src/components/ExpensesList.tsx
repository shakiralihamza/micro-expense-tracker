import React, {useContext} from 'react';
import ExpensesContext from "../context/ExpensesContext";
import {
    Box,
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
// noinspection ES6PreferShortImport
import {Expense} from "../react-app-env.d";

const ExpensesList = () => {
    const {expenses, deleteExpense} = useContext(ExpensesContext);
    const ExpensesLength: number = expenses.length;
    const handleDeleteExpense = (expenseToDelete: number): void => {
        deleteExpense(expenseToDelete);
    }
    return (
        <>
            {ExpensesLength > 0
                ?
                expenses.map((expense: Expense, index: number) => {
                    return (
                        <>
                            <Paper elevation={0} sx={{margin: '0 0 20px', borderRadius: 5}}>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        primary={
                                            <Typography sx={{fontWeight: '500', fontSize:18}}>{expense.desc}</Typography>
                                        }
                                        secondary={
                                            <>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    sx={{display: 'inline'}}
                                                    color="textSecondary"
                                                >
                                                    {(expense.amount >= 0) ?
                                                        <Box sx={{color: 'success.main'}}>Income</Box>
                                                        :
                                                        <Box sx={{color: 'warning.dark'}}>Expense</Box>
                                                    }
                                                </Typography>
                                                {` — ${(expense.amount < 0) ? '-' : ''}$${Math.abs(expense.amount)}`}
                                            </>
                                        }
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete" color={"primary"}>
                                            <DeleteIcon sx={{color: 'error.light'}} onClick={() => handleDeleteExpense(index)}/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </Paper>
                        </>
                    );
                })
                :
                <>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary={"No Expenses added yet"}
                        />
                    </ListItem>
                </>
            }
        </>
    );
};

export default ExpensesList;
