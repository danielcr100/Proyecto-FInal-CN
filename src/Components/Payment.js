import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Payment() {
    const classes = useStyles();

    return (
        <div align="center" className={classes.root}>

            <Button variant="contained" color="secondary">
                Metodo de Pago
      </Button>
        </div>
    );
}