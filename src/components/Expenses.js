import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Chip, Fade, Slide, Zoom} from "@material-ui/core";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuContext from "../context/MenuContext";
import MeetingsMenuContext from "../context/MeetingsMenuContext";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    chip: {
        margin: theme.spacing(0.2)
    }
}));

const Expenses = () => {
    const classes = useStyles();
    const something = React.useContext(MenuContext);
    const currentMenu = something.values.currentMenu;
    return (
        <>
            <Fade in={currentMenu} timeout={300}>
                <Container>
                <Typography variant={'h4'} style={{paddingTop: 20}}>
                Expenses
                </Typography>
                <List className={classes.root}>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        {/*<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />*/}
                        <FastfoodIcon align={'center'}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Rs. 50"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    <Chip className={classes.chip} variant="outlined" size={'small'} label={'Elaichi Tea'} avatar={<Avatar>2</Avatar>}/>
                                    {/*<Badge color="secondary" badgeContent={'debt'}>*/}
                                        <Chip className={classes.chip} variant="outlined" size={'small'} label={'Ginger Tea'} avatar={<Avatar>1</Avatar>} color={'secondary'}/>
                                    {/*</Badge>*/}
                                    <Chip className={classes.chip} variant="outlined" size={'small'} label={'Coke'} avatar={<Avatar>5</Avatar>}/>
                                </Typography>
                                <br/>
                                <Typography variant={'caption'}>
                                    {"Saturday, 20 February 2021"}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Sandra Adams
                                </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
            </Container>
            </Fade>
        </>
    );
};

export default Expenses;
