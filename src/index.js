import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom'

import './Styles/estilos.css'


ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <CssBaseline />
            <App>

            </App>
        </ThemeProvider>,
    </BrowserRouter>,

    document.getElementById('root')


);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
