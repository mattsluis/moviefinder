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

    render() {
        const { movie, rotten } = this.props;
        console.log(movie);
        const backButtonProps = {
            buttonText: 'Go Back',
        }

        return (
            <div className={Style.movieContainer}>
                <h1 className={Style.movieHeader}>{movie.Title} <span className={Style.year}>{movie.Year}</span></h1>
                <span>Tomatometer: {rotten} </span><span>Runtime: {movie.Runtime} </span>
                <img src={movie.Poster} />
                <p className={Style.stars}>Starring: {movie.Actors}</p>

                <p className={Style.plot}>{movie.Plot}</p>
                <Link to='/'><Button {...backButtonProps}/></Link>
            </div>
        )
    }
}
