import React, {useContext} from 'react';
import AddIcon from '@mui/icons-material/Add';
import ExpensesContext from "../context/ExpensesContext";
import {
    Box,
    Container,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";


const AddExpense = () => {
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
        addExpense(newExpense);
        setExpenseAmount('');
        setExpenseTitle('')
    }
    return (
        <>
            <Box style={{
                width: '100%',
                backgroundColor: 'white',
                opacity: '0.9',
                padding:'20px 0 20px 0',
                position: 'fixed',
                zIndex: 99
            }}>
                <Container maxWidth={"sm"}>
                    <Grid
                        container
                        // direction={'column'}
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item xs>
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
                        <Grid item xs>
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
                        <Grid item xs={"auto"} onClick={handleAddExpense}>
                            <IconButton color={"primary"}>
                                <AddIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default AddExpense;
