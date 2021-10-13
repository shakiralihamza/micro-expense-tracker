import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MeetingsMenuContext from "../context/MeetingsMenuContext";
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box";
import {CssBaseline, Grid, Link} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        fontSize: 15
    },
    AppBarStyle: {
        backgroundColor: 'rgba(255,255,255,0.92)',
        boxShadow: 'none',
    },
    GridStyle: {
        padding: '4px 0'
    },
    menuGrid: {
    padding: '5px 20px',
    // backgroundColor: 'aqua'
}

}));


const MeetingsMenu = (props) => {
    const something = React.useContext(MeetingsMenuContext);

    const handleClickOpen = () => {
        something.state.setOpenAddMeeting(true);
    };



    const classes = useStyles();


    return (
        <>
            <CssBaseline />
                <AppBar className={classes.AppBarStyle}>
                    <Box className={classes.root}>
                        <Grid
                            className={classes.GridStyle}
                            container
                            direction={'row'}
                            justify="space-around"
                            alignItems="center"
                        >
                            <Grid item className={classes.menuGrid}>
                                <Link
                                    style={{margin: 'auto', textAlign:'center'}}
                                    component="button"
                                    // variant="caption"
                                    underline={'none'}
                                >
                                    <FilterListIcon fontSize='medium'/>
                                </Link>
                            </Grid>
                            <Grid item>
                                Expenses
                            </Grid>
                            <Grid item className={classes.menuGrid} onClick={handleClickOpen}>
                                Add<Link
                                    component="button"
                                    underline={'none'}
                                >
                                    <AddIcon fontSize={'medium'}/>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </AppBar>
        </>
    );
};

export default MeetingsMenu;
