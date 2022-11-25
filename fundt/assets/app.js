/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

// ./src/js/app.js

import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from "./js/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'),
);

