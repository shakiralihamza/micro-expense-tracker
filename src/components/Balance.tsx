import React, {useContext} from 'react';
import ExpensesContext from "../context/ExpensesContext";
import {Grid, IconButton, Paper, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// noinspection ES6PreferShortImport
import {Expense} from "../react-app-env.d";

const backgroundGreen = '#e0fbe9';
const backgroundYellow = '#fbf0d9';

interface PaperProp {
    type: string
    data: string
}
const ThePaper: React.FC<PaperProp> = ({type, data}) => (
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
    const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("sm"));

    const {expenses} = useContext(ExpensesContext);
    const amounts: number[] = expenses.map((expense: Expense) => expense.amount);
    const totalAmount: number = amounts.reduce((acc: number, item: number) => (acc + item), 0);

    const netAmount: number = amounts.reduce((acc: number, item: number) => (acc + Math.abs(item)), 0);

    const positiveAmounts: number[] = expenses.map((expense: Expense) => {
        if (expense.amount > 0) {
            return expense.amount
        } else return 0
    });
    const totalPositiveAmount: number = positiveAmounts.reduce((acc, item) => (acc + item), 0);
    let positivePercentage: string; // the toFixed method returns a string
    if (netAmount !== 0) {
        positivePercentage = ((totalPositiveAmount / netAmount) * 100).toFixed(1);
    } else {
        positivePercentage = '0';
    }

    const negativeAmounts: number[] = expenses.map((expense: Expense) => {
        if (expense.amount < 0) {
            return expense.amount
        } else return 0
    });
    const totalNegativeAmount: number = negativeAmounts.reduce((acc: number, item: number) => (acc + item), 0);
    let negativePercentage: string; // the toFixed method returns a string
    if (netAmount !== 0) {
        negativePercentage = Math.abs((totalNegativeAmount / netAmount) * 100).toFixed(1);
    } else {
        negativePercentage = '0';
    }
    return (
        <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            sx={{padding: '0 0 20px'}}
            spacing={2}
        >
            <Grid item xs={'auto'} order={isSmallScreen ? 1 : 0}>
                <ThePaper type={'Income'} data={positivePercentage}/>
            </Grid>
            <Grid item xs order={isSmallScreen ? 2 : 1}>
                <ThePaper type={'Expense'} data={negativePercentage}/>
            </Grid>
            <Grid item xs={12} sm={'auto'} order={isSmallScreen ? 0 : 2}>
                <Stack direction={"column"}>
                    <Typography
                        component={'span'}
                        // textAlign={isSmallScreen ? "center" : null'}
                        align={isSmallScreen ? "center" : 'inherit'}
                        sx={{
                            lineHeight: 1.1,
                            fontWeight: '600',
                            fontSize: isSmallScreen ? 24 : 20
                        }}
                    >
                        {totalAmount < 0 ? '-' : ''}${Math.abs(totalAmount)}
                    </Typography>
                    <Typography align={isSmallScreen ? "center" : 'inherit'} fontSize={14} sx={{lineHeight: 1.1}}>
                        Balance
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Balance;
