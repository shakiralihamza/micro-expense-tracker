import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import MenuContext from "../context/MenuContext";

import {Fab} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        width: "100%",
        position: 'fixed',
        bottom: 0,
        height: 100,
        alignItems: 'flex-end',
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    meetingMenuButton: {
        bottom: 5,
        backgroundColor: 'white',
        color: 'inherit'
    }
});

const BottomMenu = () => {
    const something = React.useContext(MenuContext);
    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    const changeMenu = (selectedMenu) => {
        if (selectedMenu === 0) {
            something.state.setMenu('expenses');
        } else if (selectedMenu === 1) {
            something.state.setMenu('meetings');
        } else if (selectedMenu === 2) {
            something.state.setMenu('reminders');
        }
    }

    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    changeMenu(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Expenses" icon={<MonetizationOnIcon fontSize={'medium'} />} />
                <BottomNavigationAction label="Meetings" icon={
                    <Fab className={classes.meetingMenuButton}>
                        <MeetingRoomIcon fontSize={'large'}/>
                    </Fab>
                } />
                <BottomNavigationAction label="Reminders" icon={<CalendarViewDayIcon fontSize={'medium'} />} />
            </BottomNavigation>
        </div>
    );
};

export default BottomMenu;
