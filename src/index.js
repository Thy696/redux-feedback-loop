import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Axios from 'axios';

const reducerInitialState = {
    feedback: {
        feeling: '',
        understanding: '',
        support: '',
        comment: '',
        flagged: false,
        // date: '',
    },
};
const feedbackReducer = (state = reducerInitialState, action) => {
    console.log('in feedbackReducer', action);
    // if (action.type === 'feeling') {
    //     console.log('in review', action.payload);
    //     let feedbackFeeling = {
    //         feeling: action.payload,
    //     }
    //     state = {
    //         ...state,
    //         feedback: {
    //             feeling: feedbackFeeling
    //         }
    //     }
    // }
    // if (action.type === 'understanding') {
    //     console.log('in review', action.payload)
    //     let feedbackUnderstanding = {
    //         understanding: action.payload,
    //     }
    //     state = {
    //         ...state,
    //         feedback: {
    //             understanding: feedbackUnderstanding
    //         }
    //     }
    // }
    // if (action.type === 'support') {
    //     console.log('in review', action.payload)
    //     let feedbackSupport = {
    //         support: action.payload,
    //     }
    //     state = {
    //         ...state,
    //         feedback: {
    //             support: feedbackSupport
    //         }
    //     }
    // }
    if (action.type === 'comments') {
        console.log('in review', action.payload)
        let feedbackObj = {
            feeling: action.payload.feeling,
            understanding: action.payload.understanding,
            support: action.payload.support,
            comment: action.payload.comment,
            flagged: false,
            date: new Date(),
        }
        state = {
            ...state,
            feedback: feedbackObj
        }
    }
    if (action.type === 'review') {
        console.log('in review', action.payload)
        console.log('state in index:', state)

        let feedbackObjToSend = {
            feeling: state.feedback.feeling,
            understanding: state.feedback.understanding,
            support: state.feedback.support,
            comment: state.feedback.comment,
            flagged: false,
            // date: new Date(),
        }
        console.log('in feedbackObjToSend is:', feedbackObjToSend)

        Axios.post('/submit', feedbackObjToSend)
            .then(response => {
                console.log('back from POST: ', response.data)
            }).catch(err => {
                console.log('Error in POST:', err);
                alert('Error in post request')
            })
    }
    return state;

}


const feedbackStore = createStore(feedbackReducer);

ReactDOM.render(
    <Provider store={feedbackStore}>
        <App />,
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
