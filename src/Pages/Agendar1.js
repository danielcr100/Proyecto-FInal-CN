import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Services from '../Services'
import Payment from '../Components/Payment'
import DateTime from '../Components/DateTime'
import Logo from '../Components/logo'





export default function Agenda1() {

    return (
        <div>
            <React.Fragment>
                <Logo></Logo>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Typography component="div" style={{ backgroundColor: '#80bd9e', height: '500px' }}>
                        <h1 align="center">Agenda tu cita</h1>
                        <hr></hr>
                        <Services></Services>
                        <hr></hr>
                        <Payment></Payment>
                        <hr></hr>
                        <DateTime ></DateTime>
                    </Typography>
                </Container>

            </React.Fragment>
        </div >
    );
}