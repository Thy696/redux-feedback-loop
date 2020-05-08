import React, { Component } from 'react';

class Support extends Component {

    state = { //Create an state to store all of data that user input
        support: '',
    }

    handleNext = () => { // handle next button to moving to comments component
        console.log('Next clicked!')
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input type="text" />

                <button onClick={this.handleNext} >Next</button>{/*when the next button is clicked, it will switch to the comment component*/}

            </div>
        )
    }
}
export default Support;