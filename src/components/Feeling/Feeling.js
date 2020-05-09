import React, { Component } from 'react';

class Feeling extends Component {
    // state = {
    //     feeling:'',
    // }

    componentDidMount() {
        console.log('in feeling', this.props)
    }

    handleNextButton = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
        if (this.props.feeling === "") {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/understanding');
        }
    }

    // handleChangefor = (event) => {
    //     console.log('handle change for felling', event.target.value)
    //     this.setState({
    //        feeling:event.target.value
    //     })
    // }


    render() {
        return (
            <div>
                <h1>How are you felling today?</h1>
                <input type="number" placeholder="Your feeling"
                    onChange={(event) => this.props.handleChangefor(event,'feeling')}
                />
                <button onClick={this.handleNextButton} >Next</button>{/*when the next button is clicked, it will switch to the understanding component*/}
                <br />
                {JSON.stringify(this.props.feeling)}
            </div>
        )
    }
}
export default Feeling;