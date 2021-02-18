import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';


const useStyles = makeStyles({
    root: {
        width: "100%",
        position: 'fixed',
        bottom: 0
    },
});

const BottomMenu = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Expenses" icon={<MonetizationOnIcon fontSize={'medium'} />} />
                <BottomNavigationAction label="Meetings" icon={<MeetingRoomIcon fontSize={'medium'} />} />
                <BottomNavigationAction label="Reminders" icon={<CalendarViewDayIcon fontSize={'medium'} />} />
            </BottomNavigation>
        </div>
    );
};

export default BottomMenu;
