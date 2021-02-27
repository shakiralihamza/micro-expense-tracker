import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {MenuItem, Paper, Select, withStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MeetingsMenuContext from "../context/MeetingsMenuContext";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '5px 0 10px 0',
        padding: '4px 0 0 0',
        display: 'flex',
        alignItems: 'center',
    }
}));

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        // borderRadius: 4,
        position: 'relative',
        // backgroundColor: theme.palette.background.paper,
        border: 'none',
        // border: '1px solid #ced4da',
        fontSize: 14,
        // padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
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
        '&:focus': {
            // borderRadius: 4,
            // borderColor: '#80bdff',
            backgroundColor: 'transparent'
            // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const AddAttendee = () => {
    const [open, setOpen] = React.useState(false);
    const {state} = React.useContext(MeetingsMenuContext);

    const [attendeeTitle, setAttendeeTitle] = React.useState('Mr.');
    const [attendeeName, setAttendeeName] = React.useState('');
    const [attendeeCompany, setAttendeeCompany] = React.useState('');
    const [attendeeDesignation, setAttendeeDesignation] = React.useState('');
    const [attendeePhone, setAttendeePhone] = React.useState('');
    const [attendeeEmail, setAttendeeEmail] = React.useState('');
    const handleTitle = (event) => {
        setAttendeeTitle(event.target.value);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        clearFields();
    };
    const handleName = (event) => {
        setAttendeeName(event.target.value);
    };
    const handleCompany = (event) => {
        setAttendeeCompany(event.target.value);
    };
    const handleDesignation = (event) => {
        setAttendeeDesignation(event.target.value);
    };
    const handlePhone = (event) => {
        setAttendeePhone(event.target.value);
    };
    const handleEmail = (event) => {
        setAttendeeEmail(event.target.value);
    };

    const handleAttendeeAdd = () => {
        const newAttendeeInfo = {
            key: '_' + Math.random().toString(36).substr(2, 9),
            title: attendeeTitle,
            name: attendeeName,
            company: attendeeCompany,
            phone: attendeePhone,
            email: attendeeEmail,
            designation: attendeeDesignation
        };
        state.setAttendees([...state.attendees, newAttendeeInfo]);
        setOpen(false);
        clearFields();
    }

    const clearFields = () => {
        setAttendeeTitle('Mr.');
        setAttendeeName('');
        setAttendeeDesignation('');
        setAttendeeCompany('');
        setAttendeePhone('');
        setAttendeeEmail('');
    }
    const classes = useStyles();
    return (
        <div>
                <Button style={{float: 'none'}} variant="outlined" size={'small'} color="primary" onClick={handleClickOpen}>
                    Add
                </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle  id="form-dialog-title">New Attendee</DialogTitle>
                <DialogContent style={{padding: '0 10px'}}>
                    <Paper component="form" className={classes.root}>
                        <IconButton className={classes.iconButton} aria-label="menu">
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={attendeeTitle}
                                onChange={handleTitle}
                                input={<BootstrapInput />}
                            >
                                {/*<MenuItem value="">*/}
                                {/*    <em>None</em>*/}
                                {/*</MenuItem>*/}
                                <MenuItem value={'Mr.'}>Mr.</MenuItem>
                                <MenuItem value={'Miss.'}>Miss.</MenuItem>
                                <MenuItem value={'Mrs.'}>Mrs.</MenuItem>
                                <MenuItem value={'Ms.'}>Ms.</MenuItem>
                            </Select>
                        </IconButton>
                        <InputBase
                            onChange={handleName}
                            value={attendeeName}
                            autoFocus
                            className={classes.input}
                            placeholder="Full Name"
                            inputProps={{ 'aria-label': 'Full Name' }}
                        />

                    </Paper>
                    <TextField
                        onChange={handleCompany}
                        value={attendeeCompany}
                        margin="dense"
                        id="company"
                        label="Company"
                        variant={'outlined'}
                        fullWidth
                    />
                    <TextField
                        onChange={handleDesignation}
                        value={attendeeDesignation}
                        margin="dense"
                        id="name"
                        label="Designation"
                        variant={'outlined'}
                        fullWidth
                    />
                    <TextField
                        onChange={handlePhone}
                        value={attendeePhone}
                        margin="dense"
                        id="name"
                        label="Cell Phone"
                        variant={'outlined'}
                        fullWidth
                    />
                    <TextField
                        onChange={handleEmail}
                        value={attendeeEmail}
                        margin="dense"
                        id="name"
                        label="Email Address"
                        variant={'outlined'}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAttendeeAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddAttendee;
