import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import MeetingsMenuContext from "../context/MeetingsMenuContext";
import {Grid, Link} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import AddMeetingForm from "./AddMeetingForm";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'sticky',
        backgroundColor: 'rgb(255,255,255,0.9)',
        color: 'black',
        boxShadow: 'none',
        // backgroundColor: '#FAF8F7'
    },
    title: {
        // marginLeft: theme.spacing(2),
        // flex: 1,
        // textAlign: 'center',
        fontSize: 17,
        fontWeight: 100
    },
    IconButtonStyle: {
        padding: 0
    },
    ToolbarStyles: {
        minHeight: '40px',
        // backgroundColor: 'black'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddMeetings = () => {
    const something = React.useContext(MeetingsMenuContext);
    const open = something.state.openAddMeeting;
    const classes = useStyles();

    const handleClose = () => {
        something.state.setOpenAddMeeting(false);
    };

    return (
        <>
            <div>
                <Dialog scroll={'paper'} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar className={classes.ToolbarStyles}>
                            <Grid
                                container
                                direction={'row'}
                                justify={'space-between'}
                                alignItems={'center'}
                            >
                                <Grid item xs={1}>
                                    <IconButton className={classes.IconButtonStyle} color="inherit" onClick={handleClose} aria-label="close">
                                        {/*<CloseIcon />*/}
                                        <Link
                                            component="button"
                                            variant="body2"
                                            underline={"none"}
                                        >
                                            Cancel
                                        </Link>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" className={classes.title}>
                                        New Minutes
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton className={classes.IconButtonStyle} disabled color="inherit" onClick={handleClose} aria-label="add">
                                        {/*<CloseIcon />*/}
                                        <Link
                                            component="button"
                                            variant="body2"
                                            underline={"none"}
                                            color={'none'}
                                        >
                                            Add
                                        </Link>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Container>
                        <AddMeetingForm/>
                    </Container>
                </Dialog>
            </div>
        </>
    );
};

export default AddMeetings;
