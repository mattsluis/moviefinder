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
                <div className={Style.header}>
                    <h1 className={Style.title}>{movie.Title}</h1>
                    <p className={Style.year}>{movie.Year}</p>
                    <span>Tomatometer: {rotten} </span>
                    <span>Runtime: {movie.Runtime} </span>
                </div>
                <div className={Style.poster}><img src={movie.Poster} /></div>
                <p className={Style.stars}>Starring: {movie.Actors}</p>
                <p className={Style.plot}>{movie.Plot}</p>
                <Link to='/'><Button {...backButtonProps}/></Link>
            </div>
        )
    }
}
