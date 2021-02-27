import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {
    Grid, InputBase,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    Paper,
    Switch
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import AddAttendee from "./AddAttendee";
import ViewAttendee from "./ViewAttendee";
import MeetingsMenuContext from "../context/MeetingsMenuContext";

import AddTopic from "./AddTopic";
const useStyles = makeStyles((theme) => ({
    labels: {
        fontSize: 5
    },
    container: {
        marginTop: 5
        // display: 'flex',
        // flexWrap: 'wrap'
    },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        // width: 100
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    root: {
        display: 'flex',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: '0px 0 20px 0',
    },
    chip: {
        margin: theme.spacing(0.5),
        borderRadius: 5
    },
}));


const AddMeetingForm = () => {
    const {state} = React.useContext(MeetingsMenuContext);
    const attendees = state.attendees;
    const setAttendees = state.setAttendees;
    // const topics = state.topics;
    // const setTopics = state.setTopics;
    const topicsToggle = state.topicsToggle;
    const setTopicsToggle = state.setTopicsToggle;

    const [meetingDate, setMeetingDate] = React.useState('2017-05-24');
    const [meetingStart, setMeetingStart] = React.useState('12:00');
    const [meetingEnd, setMeetingEnd] = React.useState('12:00');
    const [type, setType] = React.useState('meeting');
    const [viewAttendeeInfo, setViewAttendeeInfo] = React.useState([
        { key: '#', title: 'Mr.', name: '#', company: '#', phone: '#', email: '#', designation: '#' }
    ]);
    const handleTopicsToggle = () => {
        setTopicsToggle(!topicsToggle);
    };
    const handleViewAttendeeOpen = (key) => {
        async function Do () {
            await setViewAttendeeInfo(attendees.filter((attendee) => attendee.key === key));
            // await setViewAttendeeInfo(attendees[key]);
            state.setViewAttendeeOpen(true);
        }
        Do();
    };
    const handleTypeClick =(type) => setType(type);
    const classes = useStyles();
    const handleDelete = (chipToDelete) => () => {
        setAttendees((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const handleDate = (event) => {
        setMeetingDate(event.target.value);
    }
    const handleStart = (event) => {
        setMeetingStart(event.target.value);
    }
    const handleEnd = (event) => {
        setMeetingEnd(event.target.value);
    }
    return (
        <>
            <FormControl fullWidth component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <Grid
                        container
                        direction={'row'}
                        justify={'center'}
                        alignItems={'center'}
                        spacing={2}
                    >
                        <Grid item>
                            <br/>
                            <FormControlLabel checked={type === 'meeting'} className={classes.labels} value="Meeting" control={<Radio style={{padding:4}} color="primary" size={'small'} />} label={<Typography variant={'overline'}>Meeting</Typography>} onChange={() => handleTypeClick('meeting')}/>
                        </Grid>
                        <Grid item>
                            <br/>
                            <FormControlLabel checked={type === 'agenda'} className={classes.labels} value="Agenda" control={<Radio style={{padding:4}} color="primary" size={'small'} />} label={<Typography variant={'overline'}>Agenda</Typography>}  onChange={() => handleTypeClick('agenda')} disabled/>
                        </Grid>
                    </Grid>
                </RadioGroup>
            </FormControl>
            <Typography align={"center"} variant={'overline'} display={'block'} style={{marginTop:10}}>
                Time Details
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                   <Typography variant={'caption'}>
                       Meeting held on {meetingDate} <br/> From {meetingStart} to {meetingEnd}
                   </Typography>
                </AccordionSummary>
                <div style={{padding:'20px 0'}}>
                    <form className={classes.container} noValidate>
                        <Grid
                            container
                            direction={'row'}
                            justify={'space-evenly'}
                            alignItems={'center'}
                        >
                            <Grid container justify={'center'}>
                                <Grid item>
                                    <TextField
                                        style={{margin:'0 0 20px 0'}}
                                        align={'center'}
                                        id="date"
                                        label="Held at:"
                                        type="date"
                                        onChange={handleDate}
                                        value={meetingDate}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="time"
                                    label="Starts at:"
                                    type="time"
                                    onChange={handleStart}
                                    value={meetingStart}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="time"
                                    label="Ends at:"
                                    type="time"
                                    onChange={handleEnd}
                                    value={meetingEnd}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Accordion>
            <br/>
            <div>
                <TextField size={'small'} fullWidth id="outlined-basic" label="Purpose" variant="outlined" />
                <br/>
                <br/>
                <TextField size={'small'} fullWidth id="outlined-basic" label="Location" variant="outlined" />
            </div>
            <br/>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <Typography align={"center"} variant={'overline'} display={'block'} style={{marginTop:10}}>
                        Attendees
                    </Typography>
                </AccordionSummary>
                <div style={{padding:'0 0 0 8px'}}>
                    <AddAttendee/>
                    <ViewAttendee attendeeInfo={viewAttendeeInfo}/>
                </div>
                <Paper elevation={0} component="ul" className={classes.root}>
                    {attendees.map((data) => {
                        return (
                            <li key={data.key}>
                                <Chip
                                    label={data.title + ' '+ data.name}
                                    onDelete={handleDelete(data)}
                                    onClick={() => handleViewAttendeeOpen(data.key)}
                                    className={classes.chip}
                                />
                            </li>
                        );
                    })}
                </Paper>
            </Accordion>

            <br/>
            <Typography align={"center"} variant={'overline'} display={'block'} style={{marginTop:10}}>
                <FormControlLabel
                    style={{margin: 0}}
                    control={
                        <Switch
                            color="primary"
                            checked={topicsToggle}
                            onChange={handleTopicsToggle}
                        />
                    }
                    labelPlacement={'start'}
                    label="Topics Discussed"
                />
            </Typography>
            <AddTopic/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
};

export default AddMeetingForm;
