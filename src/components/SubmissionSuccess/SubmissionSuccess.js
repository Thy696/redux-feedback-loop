import React, { Component } from "react";

class SubmissionSuccess extends Component { 

    handleButton = () => { 
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/');
           
    }

    render() { 
        return (
            <div>
                <h1>Feedback!</h1>
                <div>
                    <h2>Thank you!</h2>
                    <button onClick = {this.handleButton}>Leave New Feedback</button>
                </div>

            </div>
        )
    }
}

export default SubmissionSuccess;