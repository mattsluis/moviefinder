import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/core/button/button.jsx';
import Input from 'components/core/input/input.jsx';

import Style from './style.scss';

export default class MovieShow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goBack(){
        this.props.history.goBack();
    }

    render() {
        const { data } = this.props;
        const backButtonProps = {
            buttonText: 'Go Back',
            buttonType: '',
        }
        console.log(data)
        return (
            <div className={Style.movieContainer}>
                <h1 className={Style.movieHeader}>{data.Title}</h1>
                <span className={Style.stars}>Starring: {data.Actors}</span>
                <p className={Style.plot}>{data.Plot}</p>
                <Link to='/'>
                    <Button {...backButtonProps}/>
                </Link>
            </div>
        )
    }
}
