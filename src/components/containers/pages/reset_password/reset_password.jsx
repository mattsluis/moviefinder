import React, { Component } from 'react';

import Button from 'components/core/button/button.jsx';
import Input from 'components/core/input/input.jsx';

import {createUser} from 'middleware/user_api.js';

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Reset Password</h1>
            </div>
        )
    }
}
