import {START_SEARCH, SET_MOVIES, START_SET_DETAILS, SET_DETAILS, SET_ROTTEN } from 'constants';

const initialState = {
    query: '',
    results: [],
    details: {},
    rotten: '',
    isLoading: true,
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_SEARCH':
            return {
                ...state,
                isLoading: true,
            };
        case 'SET_MOVIES':
            return {
                ...state,
                results: action.payload,
                isLoading: false,
            };
        case 'START_SET_DETAILS':
            return {
                ...state,
                isloading: true,
            }
        case 'SET_DETAILS':
            return {
                ...state,
                details: action.payload,
                isLoading: false,
            };
        case 'SET_ROTTEN':
            return {
                ...state,
                rotten: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
}

export default movieReducer;
