import React, { Component } from 'react';

class Understanding extends Component {

    componentDidMount() {
        console.log('in understanding', this.props);
    }
    handleNextButton = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
        if (this.props.feedback.understanding === "") {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/support');
            this.props.dispatch({
                type:'understanding',
                payload: this.props.feedback.understanding
            })
        }
    }
    handlePrevious = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
        if (this.props.feedback.understanding === "") {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/feeling');
            this.props.dispatch({
                type:'understanding',
                payload: this.props.feedback.understanding
            })
        }
    }



    render() {
        return (
            <div className= "component_box understanding_component" >
                <h1>How well are you understanding the content?</h1>
                <input type="number"
                    value={this.props.feedback.understanding}
                    onChange={(event) => this.props.handleChangefor(event, 'understanding')}
                />
                <button onClick={this.handleNextButton} >Next</button>{/*when the next button is clicked, it will switch to the support component*/}
                <button onClick={this.handlePrevious} >Previous</button>{/*when the next button is clicked, it will switch to the support component*/}

                {/* {JSON.stringify(this.props.understanding)} */}

            </div>
        )
    }
}
export default Understanding;