import React, { Component } from 'react';

class Feeling extends Component {


    componentDidMount() {
        console.log('in feeling', this.props)
    }

    handleNextButton = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
        if (this.props.feedback.feeling === '') {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/understanding');
            // this.props.dispatch({
            //     type:'feeling',
            //     payload: this.props.feeling
            // })
        }
    }

    render() {
        return (
            <div>
                <h1>How are you felling today?</h1>
                <input type="number" placeholder="Your feeling"
                    value={this.props.feedback.feeling}

                    onChange={(event) => this.props.handleChangefor(event, 'feeling')}// use the handle change for from component parents (App.js) to handle on change for inpput field
                />
                <button onClick={this.handleNextButton} >Next</button>{/*when the next button is clicked, it will switch to the understanding component*/}
                <br />

                {JSON.stringify(this.props.feeling)}
            </div>
        )
    }
}
export default Feeling;