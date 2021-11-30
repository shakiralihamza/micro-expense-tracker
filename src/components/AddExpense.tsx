import * as React from 'react';
import {Global} from '@emotion/react';
import {styled} from '@mui/material/styles';
import {grey} from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {useContext, useState} from "react";
import ExpensesContext from "../context/ExpensesContext";
import {
    Grid,
    InputAdornment,
    Stack,
    SvgIconProps,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    useTheme
} from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import AddTaskIcon from '@mui/icons-material/AddTask';
// noinspection ES6PreferShortImport
import {Expense} from "../react-app-env.d";


const Puller = styled(Box)(({theme}) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

interface TextFieldProps {
    icon: React.ReactElement<SvgIconProps>
    placeholder: string
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    type: string
}

const TheTextField: React.FC<TextFieldProps> = ({icon, placeholder, value, setValue, type}) => {
    const setTheValue = (e: any) => {
        if (type === 'number') {
            const re = /^[0-9\b]+$/;

            if (e.target.value === '' || re.test(e.target.value)) {
                setValue(e.target.value)
            }
        } else {
            setValue(e.target.value)
        }
    }

    return (
        <TextField
            color={'primary'}
            fullWidth
            size={"small"}
            label={null}
            variant="outlined"
            value={value}
            onChange={(e) => setTheValue(e)}
            placeholder={placeholder}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {icon}
                    </InputAdornment>
                ),
                sx: {
                    fontWeight: 400
                }
            }}
        />
    );
}
const AddExpense = () => {
    const theme = useTheme();
    const {drawerOpen, toggleDrawer, addExpense} = useContext(ExpensesContext)
    const [transType, setTransType] = useState<string>('income');
    const [amount, setAmount] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const handleTransType = (event: any, val: string) => {
        setTransType(val);
    };

    const handleAddExpense = (): void => {
        const getAmount: number = Math.abs(Number(amount))
        const newExpense: Expense = {
            desc,
            amount: transType === 'expense' ? -getAmount : getAmount
        }
        addExpense(newExpense);
        setDesc('');
        setAmount('');
        setTransType('income');
        toggleDrawer();
    }

    return (
        <>
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `auto`,
                        overflow: 'visible',
                        maxWidth: theme.breakpoints.values.sm,
                        margin: 'auto',
                    },
                }}
            />
            <SwipeableDrawer
                anchor="bottom"
                open={drawerOpen}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Box
                    sx={{
                        // position: 'absolute',
                        // top: -drawerBleeding,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                        pl: 3,

                    }}
                >
                    <Puller/>
                    <Typography sx={{p: 2, fontWeight: 600, color: 'primary.dark'}}>Add your expense</Typography>
                </Box>
                <Box
                    sx={{
                        px: 2,
                        pb: 2,
                        pl: 3,
                        pr: 3,
                        height: '100%',
                        overflow: 'auto',
                        mt: 3,
                    }}
                >
                    <Stack direction={"column"} spacing={3}>
                        <TheTextField
                            icon={<MonetizationOnIcon color={"primary"}/>}
                            placeholder={'Amount'}
                            value={amount}
                            setValue={setAmount}
                            type={'number'}
                        />
                        <TheTextField
                            icon={<DescriptionIcon color={'primary'}/>}
                            placeholder={'Description'}
                            value={desc}
                            setValue={setDesc}
                            type={'text'}
                        />
                        <ToggleButtonGroup
                            value={transType}
                            exclusive
                            onChange={handleTransType}
                            fullWidth
                            size={"small"}
                        >
                            <ToggleButton value="income" color={"success"} disableRipple>
                                Income
                            </ToggleButton>
                            <ToggleButton value="expense" color={'warning'} disableRipple>
                                Expense
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <Grid container justifyContent={'center'}>
                            <Grid item>
                                <Button
                                    variant="contained" color={'primary'}
                                    startIcon={<AddTaskIcon/>} disableRipple
                                    disabled={amount === '' || desc === ''}
                                    onClick={handleAddExpense} sx={{width: '130px'}}
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </SwipeableDrawer>
        </>
    );
};

export default AddExpense;
