import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import {CssBaseline, Grid, InputAdornment, InputLabel, OutlinedInput, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import {number} from "prop-types";

const useStyles = makeStyles((theme) => ({
    AppBarStyle: {
        marginTop: '15px',
        backgroundColor: 'rgba(255,255,255,0.92)',
        boxShadow: 'none',
        color: "black"
    }
}));


const MeetingsMenu = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

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
                                <AddIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </>
    );
};

export default MeetingsMenu;
