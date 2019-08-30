import React, { Component } from 'react';

import Button from 'components/core/button/button.jsx';
import Input from 'components/core/input/input.jsx';

import {createUser} from 'middleware/user_api.js';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>
            </div>
        )
    }
}
