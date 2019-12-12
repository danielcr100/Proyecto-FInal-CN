import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




export default function Services() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false

    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };
    return (
        <div align="center">
            <FormGroup column>
                <FormControlLabel
                    control={
                        <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
                    }
                    label="Uñas C10.000"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB" />
                    }
                    label="Masaje C15.000"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={state.checkedC} onChange={handleChange('checkedC')} value="checkedC" />
                    }
                    label="Maquillaje C5.000"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={state.checkedD} onChange={handleChange('checkedD')} value="checkedD" />
                    }
                    label="Cabello C5.000"
                />
            </FormGroup >

        </div>
    )
}