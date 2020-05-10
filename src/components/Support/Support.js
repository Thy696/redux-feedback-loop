import React, { Component } from 'react';

class Support extends Component {

    componentDidMount() {
        console.log('in support', this.props);
    }


    handleNext = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
        if (this.props.feedback.support === "") {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/comments');
            this.props.dispatch({
                type:'support',
                payload: this.props.feedback.support
            })
        }
    }

    handlePrevious = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
        if (this.props.feedback.support === "") {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/understanding');
            this.props.dispatch({
                type:'support',
                payload: this.props.feedback.support
            })
        }
    }


    render() {
        return (
            <div className= "component_box support_component">
                <h1>How well are you being supported?</h1>
                <input type="number"
                    value={this.props.feedback.support}
                    onChange={(event) => this.props.handleChangefor(event, 'support')}
                />
                <button onClick={this.handleNext}>Next</button>{/*when the next button is clicked, it will switch to the comment component*/}
                <button onClick={this.handlePrevious}>Previous</button>{/*when the next button is clicked, it will switch to the comment component*/}

                {/* {JSON.stringify(this.props.support)} */}
            </div>
        )
    }
}
export default Support;