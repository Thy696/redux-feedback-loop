import React, { Component } from 'react';

class Support extends Component {




    handleNextButton = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
        if (this.props.support === "") {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/comments');
        }
    }


    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input type="text"
                    onChange={(event) => this.props.handleChangefor(event, 'support')}
                />

                <button onClick={this.handleNextButton}>Next</button>{/*when the next button is clicked, it will switch to the comment component*/}
                {JSON.stringify(this.props.support)}

            </div>
        )
    }
}
export default Support;