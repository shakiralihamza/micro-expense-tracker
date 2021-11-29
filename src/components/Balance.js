import React from 'react';
// import ExpensesContext from "../context/ExpensesContext";
import {Grid, IconButton, Paper, Stack, Typography} from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const backgroundGreen = '#e0fbe9';
const backgroundYellow = '#fbf0d9';

const ThePaper = ({type, data}) => (
    <Paper elevation={0} sx={{padding: '10px 10px', width: '140px', borderRadius: 5}}>
        <Grid container alignItems={'center'} spacing={2}>
            <Grid item>
                <IconButton
                    sx={{
                        backgroundColor: type === 'Income' ? backgroundGreen : backgroundYellow,
                        color: type === 'Income' ? 'success.main' : 'warning.main',
                        '&: hover': {
                            backgroundColor: type === 'Income' ? backgroundGreen : backgroundYellow,
                            cursor: 'default'
                        }
                    }}
                    size={"small"}
                    disableRipple
                >
                    {
                        type === 'Income'
                            ?
                            <ArrowDropUpIcon fontSize={"large"}/>
                            :
                            <ArrowDropDownIcon fontSize={"large"}/>
                    }
                </IconButton>
            </Grid>
            <Grid item>
                <Stack direction={"column"}>
                    <Typography
                        component={'span'}
                        sx={{
                            lineHeight: 1.1,
                            fontWeight: '600',
                            color: type==='Income'?'success.main':'warning.main',
                            fontSize: 17
                        }}
                    >
                        {type==='Income'?'+':'-'}{data}%
                    </Typography>
                    <Typography fontSize={14} sx={{lineHeight: 1.1}}>
                        {type}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    </Paper>
);
const Balance = () => {
    // const {expenses} = useContext(ExpensesContext);
    // const amounts = expenses.map(expense => expense.amount);

    // const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <Grid
            container
            alignItems={"center"}
            justify={"center"}
            sx={{padding: '20px 0'}}
            spacing={2}
        >
            <Grid item xs={'auto'}>
                <ThePaper type={'Income'} data={24}/>
            </Grid>
            <Grid item xs>
                <ThePaper type={'Expense'} data={42}/>
            </Grid>
            <Grid item xs={'auto'}>
                <Stack direction={"column"}>
                    <Typography
                        component={'span'}
                        sx={{
                            lineHeight: 1.1,
                            fontWeight: '600',
                            fontSize: 17
                        }}
                    >
                        $1500.56
                    </Typography>
                    <Typography textAlign={"right"} fontSize={14} sx={{lineHeight: 1.1}}>
                        Net
                    </Typography>
                </Stack>
            </Grid>
            {/*<Grid item>
                <Typography variant={'h5'}>
                    BALANCE: {total < 0 ? '-' : ''}${Math.abs(total)}
                </Typography>
            </Grid>*/}
        </Grid>
    );
};

export default Balance;
