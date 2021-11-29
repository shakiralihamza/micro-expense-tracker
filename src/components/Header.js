import React from 'react';
import {Container, Fab, Grid, IconButton, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Header() {
    return (
        <Grid
            sx={{height: '100px'}}
            container
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Grid item>
                <Typography variant={"h4"} sx={{fontWeight: '500'}}>Daily Transactions</Typography>
            </Grid>
            <Grid item>
                <Fab size={"small"} color="primary" aria-label="add" disableRipple>
                    <AddIcon/>
                </Fab>
            </Grid>
        </Grid>
    );
}

export default Header;