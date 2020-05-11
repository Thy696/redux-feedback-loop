import React, { Component } from 'react';

class Header extends Component {


    handleClickHome = () => {
        console.log('in handleClickHome');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title"
                        onClick={this.handleClickHome}
                    >Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                    {/* {JSON.stringify(this.props.reduxState)} */}

                </header>

            </div>
        )
    }
}
export default Header;