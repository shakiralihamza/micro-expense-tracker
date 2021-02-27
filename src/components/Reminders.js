import React from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MenuContext from "../context/MenuContext";
import {Fade, Slide, Zoom} from "@material-ui/core";
import MeetingsMenuContext from "../context/MeetingsMenuContext";

const Reminders = () => {

    const something = React.useContext(MenuContext);
    const currentMenu = something.values.currentMenu;
    return (
        <Container>
            <Fade in={currentMenu} timeout={300}>
                <Typography variant={'h4'} style={{paddingTop: 20}}>
                    Reminders
                </Typography>
            </Fade>
        </Container>
    );
};

export default Reminders;
