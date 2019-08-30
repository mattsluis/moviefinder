import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Style from './style.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.onClick && this.props.onClick('Button');
    }

    getButtonClassNames() {
        const { buttonType } = this.props;
        console.log(buttonType);
        let btnClassNames = '';
        switch (buttonType) {
            case 'submit':
                btnClassNames = `${Style.btn} ${Style.btnSubmit}`;
                break;
            case 'delete':
                btnClassNames = `${Style.btn} ${Style.btnDelete}`;
                break;
            case 'update':
                btnClassNames = `${Style.btn} ${Style.btnUpdate}`;
                break;
            case 'cancel':
                btnClassNames = `${Style.btn} ${Style.btnCancel}`;
                break;
            default:
                btnClassNames = `${Style.btn}`;
            }
        console.log(btnClassNames);
        return btnClassNames;
    }

    generateButton() {
        return (
            <button
                type="button"
                className={this.getButtonClassNames()}
                onClick={this.handleClick}
                disabled={this.props.disabled || false}
            >
                {this.props.buttonSpan && <span>{this.props.buttonSpan}</span>}
                {this.props.buttonText}
            </button>
        )
    }

    render() {
        return (
                this.generateButton()
        )
    }
}

Button.propTypes = {
    buttonType: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    buttonSpan: PropTypes.string,
    onClick: PropTypes.func,
};
