import React, {useContext} from 'react';
import ExpensesContext from "../context/ExpensesContext";
import {Grid, IconButton, Paper, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const backgroundGreen = '#e0fbe9';
const backgroundYellow = '#fbf0d9';

const ThePaper = ({type, data}) => (
    <Paper elevation={0} sx={{padding: '10px 10px', width: '160px', borderRadius: 5}}>
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
                            color: type === 'Income' ? 'success.main' : 'warning.main',
                            fontSize: 17
                        }}
                    >
                        {type === 'Income' ? '+' : '-'}{data}%
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
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const {expenses} = useContext(ExpensesContext);
    const amounts = expenses.map(expense => expense.amount);
    // const total = amounts.reduce((acc, item) => (acc += item), 0);
    const totalAmount = amounts.reduce((acc, item) => (acc + item), 0);

    const netAmount = amounts.reduce((acc, item) => (acc + Math.abs(item)), 0);

    const positiveAmounts = expenses.map(expense => {
        if (expense.amount > 0) {
            return expense.amount
        } else return 0
    });
    const totalPositiveAmount = positiveAmounts.reduce((acc, item) => (acc + item), 0);
    let positivePercentage;
    if (netAmount !== 0) {
        positivePercentage = ((totalPositiveAmount / netAmount) * 100).toFixed(1);
    } else {
        positivePercentage = 0;
    }

    const negativeAmounts = expenses.map(expense => {
        if (expense.amount < 0) {
            return expense.amount
        } else return 0
    });
    const totalNegativeAmount = negativeAmounts.reduce((acc, item) => (acc + item), 0);
    let negativePercentage;
    if (netAmount !== 0) {
        negativePercentage = Math.abs((totalNegativeAmount / netAmount) * 100).toFixed(1);
    } else {
        negativePercentage = 0;
    }
    return (
        <Grid
            container
            alignItems={"center"}
            justify={"center"}
            sx={{padding: '0 0 20px'}}
            spacing={2}
        >
            <Grid item xs={'auto'} order={isSmallScreen?1:0}>
                <ThePaper type={'Income'} data={positivePercentage}/>
            </Grid>
            <Grid item xs order={isSmallScreen?2:1}>
                <ThePaper type={'Expense'} data={negativePercentage}/>
            </Grid>
            <Grid item xs={12} sm={'auto'} order={isSmallScreen?0:2}>
                <Stack direction={"column"}>
                    <Typography
                        component={'span'}
                        textAlign={isSmallScreen?"center":null}
                        sx={{
                            lineHeight: 1.1,
                            fontWeight: '600',
                            fontSize: isSmallScreen?24:20
                        }}
                    >
                        {totalAmount < 0 ? '-' : ''}${Math.abs(totalAmount)}
                    </Typography>
                    <Typography textAlign={isSmallScreen?"center":null} fontSize={14} sx={{lineHeight: 1.1}}>
                        Balance
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Balance;
