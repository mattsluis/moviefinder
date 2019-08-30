import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Button from 'components/core/button/button.jsx';
import Input from 'components/core/input/input.jsx';

import SearchBox from 'components/omdb/search_box/search_box.jsx';
import SearchResults from 'components/omdb/search_results/search_results.jsx';

import Style from './style.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { isLoading } = this.props;

        return (
            <div>
                <h1 className={Style.welcomeHeader}>Welcome to Movie Search</h1>
                <SearchBox />
                <SearchResults />

            </div>
        )
    }
}

const mapStateToProps = state => ({
  loading: state.movieReducer.isLoading
});

export default connect(mapStateToProps)(Home);
