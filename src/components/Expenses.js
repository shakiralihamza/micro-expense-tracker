import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Container, Fade} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import MeetingsMenu from "./MeetingsMenu";

import MeetingsMenuContext from "../context/MeetingsMenuContext";
import MenuContext from "../context/MenuContext";
import ExpensesList from "./ExpensesList";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '5px'
    },
    tabs: {
        minHeight: '0',
        margin: 0
    },
    inline: {
        display: 'inline'
    },
    root2: {
        width: '100%',
        // maxWidth: '36ch',
        // backgroundColor: theme.palette.background.paper,
        paddingBottom: '80px',
        margin:'auto'
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} style={{padding: 0}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const Expenses = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [topicsToggle, setTopicsToggle] = React.useState(false);
    const [openAddMeeting, setOpenAddMeeting] = React.useState(false);
    const [viewAttendeeOpen, setViewAttendeeOpen] = React.useState(false);
    const [attendees, setAttendees] = React.useState([]);
    const [topics, setTopics] = React.useState([]);
    const [minutes, setMinutesList] = React.useState([]);
    const [meetingDate, setMeetingDate] = React.useState('2017-05-24');
    const [meetingStart, setMeetingStart] = React.useState('12:00');
    const [meetingEnd, setMeetingEnd] = React.useState('12:00');
    const [location, setLocation] = React.useState('');
    const [purpose, setPurpose] = React.useState('');

    const something = React.useContext(MenuContext);
    const currentMenu = something.values.currentMenu;
    const MeetingMenuContextValues = {
        state: {
            value,
            setValue,
            openAddMeeting,
            setOpenAddMeeting,
            viewAttendeeOpen,
            setViewAttendeeOpen,
            attendees,
            setAttendees,
            topics,
            setTopics,
            topicsToggle,
            setTopicsToggle,
            minutes,
            setMinutesList,
            meetingDate,
            meetingStart,
            meetingEnd,
            setMeetingDate,
            setMeetingStart,
            setMeetingEnd,
            location,
            purpose,
            setLocation,
            setPurpose
        }
    }

    return (
        <MeetingsMenuContext.Provider value={MeetingMenuContextValues}>
            <Fade in={currentMenu} timeout={300}>
                <Container maxWidth={"sm"}>
                    <MeetingsMenu/>
                    <Typography variant={'h4'} style={{paddingTop: 80}}>
                        Expenses
                    </Typography>
                    <Fade in={!value} timeout={300}>
                        <TabPanel value={value} index={0}>
                            <List className={classes.root2}>
                                <ExpensesList/>
                            </List>
                        </TabPanel>
                    </Fade>
                </Container>
            </Fade>
        </MeetingsMenuContext.Provider>
    );
};

export default Expenses;
