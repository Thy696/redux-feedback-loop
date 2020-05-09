import React, { Component } from 'react';

class Comment extends Component {

    componentDidMount() {
        console.log('in comment', this.props);
    }

    handleNext = () => { // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/review');
        // this.props.dispatch({
        //     type: 'comment',
        //     payload: this.props.comment
        // })
    }

    handleChangefor = () => {
        console.log('felling input changing')
    }
    render() {
        return (
            <div>
                <h1>Any comment you want to leave?</h1>
                <input type="text"
                    value={this.props.feedback.comment}
                    onChange={(event) => this.props.handleChangefor(event, 'comment')}
                />
                <button onClick={this.handleNext} >Next</button>{/*when the next button is clicked, it will switch to the review component*/}
                {/* {JSON.stringify(this.props.comments)} */}

            </div>
        )
    }
}
export default Comment;