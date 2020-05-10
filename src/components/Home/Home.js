import React, { Component } from 'react';

class Home extends Component {

    handleGo=()=>{ // handle Go button to bring the use to the Feeling component
        console.log('go clicked!')
        this.props.history.push('/feeling');

    }

    render() {
        return (
            <div className= "home_component">
                {/* <h1>Home</h1> */}
                <h2>Start giving feedback</h2>
                <button onClick = {this.handleGo}>Go</button>{/*when the Go button is clicked, it will switch to the feeling component*/}
            </div>
        )
    }
}
export default Home;