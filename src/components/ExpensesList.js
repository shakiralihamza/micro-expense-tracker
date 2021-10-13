import React, {useContext} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {ListItemSecondaryAction} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";
import MeetingsMenuContext from "../context/MeetingsMenuContext";



const ExpensesList = () => {
    const {state} = useContext(MeetingsMenuContext);
    const minutes = state.minutes;
    const setMinutesList = state.setMinutesList;

    const MinutesListLength = minutes.length;

    const handleDeleteMinute = (minuteToDelete) => {
        setMinutesList((theMinutes) => theMinutes.filter((minute) => minute.key !== minuteToDelete));
    }

    return (
        <>
            {MinutesListLength
                ?
                minutes.map((data) => {
                return (
                    <>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary={data.purpose}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            style={{display:'inline'}}
                                            color="textSecondary"
                                        >
                                            Expense/Income
                                        </Typography>
                                        {` — $${577}`}
                                    </React.Fragment>
                                }
                            />
                            <ListItemSecondaryAction >
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon onClick={() => handleDeleteMinute(data.key)} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </>
                );
            })
                :
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={"No Expenses added yet"}
                    />
                </ListItem>
                }
        </>
    );
};

export default ExpensesList;
