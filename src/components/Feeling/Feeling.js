import React, { Component } from 'react';

class Feeling extends Component {
    state = { //Create an state to store all of data that user input
        feeling: '',

    }

    handleNext = () => { // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/understanding');
    }



    render() {
        return (
            <div>
                <h1>How are you felling today?</h1>
                <input type="number" placeholder="Your feeling" />
                <button onClick={this.handleNext} >Next</button>{/*when the next button is clicked, it will switch to the understanding component*/}
            </div>
        )
    }
}
export default Feeling;