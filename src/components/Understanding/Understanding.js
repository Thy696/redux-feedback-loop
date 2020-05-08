import React, { Component } from 'react';

class Understanding extends Component {
    state = { //Create an state to store all of data that user input

        understanding: '',
    }


        handleNext=() => { // handle next button to moving to support component
            console.log('Next clicked!')
            this.props.history.push('/support');
        }

    render() {
            return (
                <div>
                    <h1>How well are you understanding the content?</h1>
                    <input type="text" />

                    <button onClick={this.handleNext} >Next</button>{/*when the next button is clicked, it will switch to the support component*/}

                </div>
            )
        }
    }
    export default Understanding;