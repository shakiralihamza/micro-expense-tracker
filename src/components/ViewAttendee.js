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
        position: 'relative',
        border: 'none',
        fontSize: 14,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
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
            backgroundColor: 'transparent'
        },
    },
}))(InputBase);

const ViewAttendee = (props) => {
    const attendeeInfo = props.attendeeInfo[0];
    const something = React.useContext(MeetingsMenuContext);
    const open = something.state.viewAttendeeOpen;
    const setOpen = something.state.setViewAttendeeOpen;

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle  id="form-dialog-title">Attendee Info</DialogTitle>
                <DialogContent style={{padding: '0 10px'}}>
                    <Paper component="form" className={classes.root}>
                        <IconButton aria-label="menu">
                            <Select
                                disabled
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={attendeeInfo.title}
                                input={<BootstrapInput />}
                            >
                                <MenuItem value={'Mr.'}>Mr.</MenuItem>
                                <MenuItem value={'Miss.'}>Miss.</MenuItem>
                                <MenuItem value={'Mrs.'}>Mrs.</MenuItem>
                                <MenuItem value={'Ms.'}>Ms.</MenuItem>
                            </Select>
                        </IconButton>
                        <InputBase
                            disabled
                            autoFocus
                            className={classes.input}
                            placeholder="Full Name"
                            value={attendeeInfo.name}
                            inputProps={{ 'aria-label': 'Full Name' }}
                        />

                    </Paper>
                    <TextField
                        disabled
                        margin="dense"
                        id="company"
                        label="Company"
                        value={attendeeInfo.company}
                        variant={'outlined'}
                        fullWidth
                    />
                    <TextField
                        disabled
                        margin="dense"
                        id="name"
                        label="Designation"
                        value={attendeeInfo.designation}
                        variant={'outlined'}
                        fullWidth
                    />
                    <TextField
                        disabled
                        margin="dense"
                        id="name"
                        label="Cell Phone"
                        value={attendeeInfo.phone}
                        variant={'outlined'}
                        fullWidth
                    />
                    <TextField
                        disabled
                        margin="dense"
                        id="name"
                        label="Email Address"
                        value={attendeeInfo.email}
                        variant={'outlined'}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ViewAttendee;
