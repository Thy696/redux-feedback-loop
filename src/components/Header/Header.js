import React, { Component } from 'react';

class Header extends Component {

    comBackHomeClick = () => {
        console.log('clicked!');
        // if (this.props.feedback.feeling === '' || this.props.feedback.understanding === '' || this.props.feedback.support === '' ) {
        //     alert('This field is requied');
        // } else if (this.props.feedback.feeling >= 6) {
        //     alert('Please give a rating 1-5')
        // } else {
            this.props.history.push('/')
        // }
    }
    
        render() {
            return (
                <div>
                    <header className="App-header">
                        <h1 className="App-title"
                            onClick={this.comBackHomeClick}
                        >Feedback</h1>
                        {/* {JSON.stringify(this.props.reduxState)} */}

                    </header>

                </div>
            )
        }
    }
    export default Header;