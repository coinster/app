import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "mobx-react";
import registerServiceWorker from './registerServiceWorker';
import Store from "./react/stores/Store";
import App from './react/App';


registerServiceWorker();

const stores = { Store: Store };

const router = (
    <Provider {...stores}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

render(router, document.getElementById("root"));