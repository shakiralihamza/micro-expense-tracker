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
    const {state} = React.useContext(MeetingsMenuContext);
    const open = state.openAddMeeting;
    const classes = useStyles();


    const attendees = state.attendees;
    const setAttendees = state.setAttendees;
    const meetingDate = state.meetingDate;
    const setMeetingDate = state.setMeetingDate;
    const meetingStart = state.meetingStart;
    const setMeetingStart = state.setMeetingStart;
    const meetingEnd = state.meetingEnd;
    const setMeetingEnd = state.setMeetingEnd;
    const purpose = state.purpose;
    const setPurpose = state.setPurpose;
    const location = state.location;
    const setLocation = state.setLocation;
    const topics = state.topics;
    const setTopics = state.setTopics;
    const minutes = state.minutes;
    const setMinutesList = state.setMinutesList;
    const setTopicsToggle = state.setTopicsToggle;
    // const topicsToggle = state.topicsToggle;


    const handleClose = () => {
        state.setOpenAddMeeting(false);
        resetFields();
    };

    const handleMinutesAdd = () => {
        const newMinutes = {
            key: '_' + Math.random().toString(36).substr(2, 9),
            meetingDate,
            meetingStart,
            meetingEnd,
            purpose,
            location,
            attendees,
            topics
        };

        setMinutesList([...minutes, newMinutes]);
        resetFields();
        handleClose();
    }

    const resetFields = () => {
        setMeetingDate('2017-05-24');
        setMeetingStart('12:00');
        setMeetingEnd('12:00');
        setPurpose('');
        setLocation('');
        setAttendees([]);
        setTopics([]);
        setTopicsToggle(false)
    }
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
                                    <IconButton
                                        className={classes.IconButtonStyle}
                                        color="inherit"
                                        onClick={handleMinutesAdd}
                                        aria-label="add"
                                    >
                                        <Link
                                            component="button"
                                            variant="body2"
                                            underline={"none"}
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
