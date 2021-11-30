import React, {useContext} from 'react';
import {Fab, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpensesContext from "../context/ExpensesContext";

function Header() {
    const {toggleDrawer} = useContext(ExpensesContext);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid
            sx={{height: '100px'}}
            container
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Grid item>
                <Typography variant={isSmallScreen?'h5':'h4'} sx={{fontWeight: '500'}}>Daily Transactions</Typography>
            </Grid>
            <Grid item>
                <Fab onClick={toggleDrawer} size={"small"} color="primary" aria-label="add" disableRipple>
                    <AddIcon/>
                </Fab>
            </Grid>
        </Grid>
    );
}

export default Header;