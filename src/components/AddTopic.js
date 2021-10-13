import React from 'react';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
import {ListItem, ListItemSecondaryAction, ListItemText, Paper} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
// import InputBase from '@material-ui/core/InputBase';
import MeetingsMenuContext from "../context/MeetingsMenuContext";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '5px 0 10px 0',
        padding: '4px 0 0 0',
        display: 'flex',
        alignItems: 'center',
    },
    theRoot: {
        display: 'flex',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: '0px 0 20px 0',
    }
}));

const AddTopic = () => {
    // const [open, setOpen] = React.useState(false);
    const {state} = React.useContext(MeetingsMenuContext);
    const topicsToggle = state.topicsToggle;
    const topics = state.topics;
    const setTopics = state.setTopics;
    // console.log(topicsToggle);

    const [topicTitle, setTopicTitle] = React.useState('');

    const handleTopicTitle = (event) => {
        setTopicTitle(event.target.value);
    };
    const handleTopicDelete = (topicToDelete) => () => {
        setTopics((theTopics) => theTopics.filter((topic) => topic.key !== topicToDelete));
    };
    const handleTopicAdd = () => {
        const newTopicInfo = {
            key: '_' + Math.random().toString(36).substr(2, 9),
            topicTitle: topicTitle
        };
        state.setTopics([...state.topics, newTopicInfo]);
        setTopicTitle('');
    }

    const classes = useStyles();
    return (
        <>
            <Paper style={{display: topicsToggle?'block':'none'}} elevation={1} component="ul" className={classes.theRoot}>
                <List dense>
                    {topics.map((data) => {
                        return (
                            <ListItem key={data.key}>
                                <ListItemText
                                    secondary={data.topicTitle}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={handleTopicDelete(data.key)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })}
                    <ListItem>
                        <TextField
                            style={{marginRight: 10}}
                            fullWidth
                            label={'Add Topic'}
                            onChange={handleTopicTitle}
                            value={topicTitle}
                        />
                        <ListItemSecondaryAction>
                            <IconButton color="primary" edge={'end'} onClick={handleTopicAdd}>
                                <AddCircleSharpIcon fontSize={'large'} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Paper>
        </>
    );
};

export default AddTopic;
