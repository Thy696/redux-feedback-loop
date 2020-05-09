import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducerInitialState = {};
const firstReducer = (state = reducerInitialState, property) => {
    console.log('in firstReducer',property);
    return state;
}


const feedbackStore = createStore(firstReducer);

ReactDOM.render(
    <Provider  store={feedbackStore}>
        <App />,
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
