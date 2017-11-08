import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import './index.css';
import './App.css';

import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <AppContainer>
        </AppContainer>
    </BrowserRouter>,
    document.getElementById('root')
);
