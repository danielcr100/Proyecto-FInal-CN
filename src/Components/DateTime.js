import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        align: "center"
    },
    textField: {
        marginLeft: theme.spacing(20),
        marginRight: theme.spacing(20),
        width: 200,
    },
}));

export default function DateTime() {
    const classes = useStyles();

    return (
        <div align="center">
            <form className={classes.container} noValidate>
                <TextField
                    id="datetime-local"
                    label="Proxima Cita"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        </div>
    );
}