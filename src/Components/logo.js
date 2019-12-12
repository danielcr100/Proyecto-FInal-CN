import React from 'react';
import Typography from '@material-ui/core/Typography';



class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            < Typography align="center">
                <img src="https://66.media.tumblr.com/b3f14c831c7efc11d53fe1b0a96b5bc2/6f114817780c4d75-78/s400x600/58bf743cc1ec669c5a2d1f49045f4ccca82e83c5.png" alt="" />

            </Typography>
        );
    }
}


export default Logo;
