import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducerInitialState = {};
const firstReducer = (state = reducerInitialState, action) => {
    console.log('in firstReducer',action);
    // if (action.type === 'feeling'){
    //     console.log('add feeling',action.payload)
    // }
    // if (action.type === 'understanding'){
    //     console.log('add understanding',action.payload)
    // }
    // if (action.type === 'support'){
    //     console.log('add support',action.payload)
    // }
    // if (action.type === 'comment'){
    //     console.log('add comment',action.payload)
    // }
    if (action.type === 'review'){
        console.log('in review',action.payload)
    }
    return state;

}


const feedbackStore = createStore(firstReducer);

ReactDOM.render(
    <Provider  store={feedbackStore}>
        <App />,
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
