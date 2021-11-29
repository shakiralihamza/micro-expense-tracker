import React, {useContext} from 'react';
import ExpensesContext from "../context/ExpensesContext";
import {Divider, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const ExpensesList = () => {
    const {expenses, deleteExpense} = useContext(ExpensesContext);
    const ExpensesLength = expenses.length;
    const handleDeleteExpense = (expenseToDelete) => {
        deleteExpense(expenseToDelete);
    }
    return (
        <>
             {ExpensesLength > 0
                ?
                expenses.map((expense, index) => {
                    return (
                        <>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={expense.title}
                                    secondary={
                                        <>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                style={{display: 'inline'}}
                                                color="textSecondary"
                                            >
                                                {(expense.amount >= 0) ?
                                                    <span style={{color:'#55a910'}}>Income</span>
                                                    :
                                                    <span style={{color:'#DB0044'}}>Expense</span>
                                                }
                                            </Typography>
                                            {` — ${(expense.amount < 0) ? '-':''}$${Math.abs(expense.amount)}`}
                                        </>
                                    }
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" color={"primary"}>
                                        <DeleteIcon onClick={() => handleDeleteExpense(index)}/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                                <Divider variant={"middle"} />
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
