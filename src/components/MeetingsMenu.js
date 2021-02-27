import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {makeStyles} from "@material-ui/core/styles";
import MeetingsMenuContext from "../context/MeetingsMenuContext";
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box";
import {CssBaseline, Grid, Link, useScrollTrigger, withStyles} from "@material-ui/core";
import * as PropTypes from "prop-types";
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


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const AntTabs = withStyles({
    root: {
        backgroundColor: 'rgb(242,242,242)',
        padding: 1,
        minHeight: 0,
        borderRadius: 5
    },
    indicator: {
        // backgroundColor: 'transparent',
        display: 'none'
    }
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: 'black',
        minWidth: 60,
        minHeight: 20,
        borderRadius: 5,
        margin: 2,
        padding: '2px 6px',
        fontSize: 12,
        fontWeight: theme.typography.fontWeightRegular,
        // marginRight: theme.spacing(4),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: 'black',
            opacity: 1,
        },
        '&$selected': {
            color: 'black',
            // fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: 'white',
            boxShadow: '-0.5px 0.5px 1px lightgray'
        },
        '&:focus': {
            color: 'black',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const MeetingsMenu = (props) => {
    const something = React.useContext(MeetingsMenuContext);

    const handleClickOpen = () => {
        something.state.setOpenAddMeeting(true);
    };

    const {window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    const classes = useStyles();
    const handleChange = (event, newValue) => {
        something.state.setValue(newValue);
    };

    const value = something.state.value;

    return (
        <>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className={classes.AppBarStyle}>
                    <Box className={classes.root} style={{backgroundColor: trigger?'#FAFAFA':'white', borderBottom: trigger?'1px solid lightgrey':''}}>
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
                                <AntTabs
                                    className={classes.tabs}
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    <AntTab value={0} className={classes.tabs} label="Minutes"/>
                                    <AntTab value={1} className={classes.tabs} label="Agendas" />
                                </AntTabs>
                            </Grid>
                            <Grid item className={classes.menuGrid} onClick={handleClickOpen}>
                                <Link
                                    component="button"
                                    // variant="body2"
                                    underline={'none'}
                                >
                                    <AddIcon fontSize={'medium'}/>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </AppBar>
            </ElevationScroll>
        </>
    );
};

export default MeetingsMenu;
