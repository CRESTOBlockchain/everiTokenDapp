// Here we create a store, apply our middleware
// Compose is our Chrome web tool to see our redux for testing
import {createStore, applyMiddleware, compose } from 'redux'
// we import our redux middle ware
import thunk from 'redux-thunk';
// we get our reducers from root since were already in the root directory we don't need to put index.js
import rootReducer from './reducers';
// we just create initialState to make it more neater in writing code and we pass this in
const initialState = {};
// create middleware as a variable from thunk object
const middleware = [thunk];
// we create our store. we take our createStore and pass in rootReducer and initial state
const store = createStore(
    rootReducer,
    initialState,
    // Compose is our Chrome web tool we pass in our applyMiddleware inside it. We dont need to use compose but its useful for testing
    compose(applyMiddleware(...middleware),


    // One more step to setup Chrome dev tools uncomment to use below

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
