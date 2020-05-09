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
            // this.props.dispatch({
            //     type:'understanding',
            //     payload: this.props.understanding
            // })
        }
    }



    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input type="text"
                    value={this.props.feedback.understanding}
                    onChange={(event) => this.props.handleChangefor(event, 'understanding')}
                />

                <button onClick={this.handleNextButton} >Next</button>{/*when the next button is clicked, it will switch to the support component*/}
                {JSON.stringify(this.props.understanding)}

            </div>
        )
    }
}
export default Understanding;