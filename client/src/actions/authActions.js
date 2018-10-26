// we take the const variable from type and import it
import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

// here we take that payload
export const registerUser = (userData, history) => (dispatch) => {
    axios.post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        });
};

// Login get user Token
export const loginUser = (userData) => (dispatch) => {
    axios.post('/api/users/login', userData)
        .then(res => {
// Save to Local Storage
            const {token} = res.data;
            // set token to local storage
            localStorage.setItem('jwtToken', token);
            // set token to auth header
            setAuthToken(token);
            // Decode token to get user information
            const decoded = jwt_decode(token );
            // set current user
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        });
};

// Set Logged in User
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};



// Log User Out - logout
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // Remove the authentication header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}))
};




















