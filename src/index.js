import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/containers/app/app.jsx';

import { Provider } from 'react-redux';

import store from 'store.js';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store = {store}>
            <App/>
        </Provider>,
        document.getElementById('root'),
    )
});
