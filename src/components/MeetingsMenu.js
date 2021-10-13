import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MeetingsMenuContext from "../context/MeetingsMenuContext";
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box";
import {CssBaseline, Grid, Input, InputAdornment, InputLabel, Link, OutlinedInput, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {number} from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontSize: 15
    },
    AppBarStyle: {
        marginTop: '15px',
        backgroundColor: 'rgba(255,255,255,0.92)',
        boxShadow: 'none',
        color: "black"
    }
}));


const MeetingsMenu = (props) => {
    const something = React.useContext(MeetingsMenuContext);



    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };


    return (
        <>
            <CssBaseline/>
            <AppBar className={classes.AppBarStyle}>
                <Box className={classes.root}>
                    <Container maxWidth={"md"}>
                        <Grid
                            container
                            direction={'row'}
                            justify="space-evenly"
                            alignItems="center"
                        >
                            <Grid item>
                                <TextField
                                    fullWidth
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
                                        value={values.amount}
                                        onChange={handleChange('amount')}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        labelWidth={60}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <IconButton color={"primary"}>
                                    <AddIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </AppBar>
        </>
    );
};

export default MeetingsMenu;
