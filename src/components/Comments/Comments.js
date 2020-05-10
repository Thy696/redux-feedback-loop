import React, { Component } from 'react';

class Comments extends Component {

    componentDidMount() {
        console.log('in comment', this.props);
    }

    handleNext = () => { // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/review');
        this.props.dispatch({
            type:'comments',
            payload:  this.props.feedback
        })
    }

    handlePrevious = () => { // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/support');
        this.props.dispatch({
            type:'comments',
            payload:  this.props.feedback
        })
    }

    handleChangefor = () => {
        console.log('felling input changing')
    }
    render() {
        return (
            <div className = "component_box">
                <h1>Any comment you want to leave?</h1>
                <input type="text"
                    value={this.props.feedback.comments}
                    onChange={(event) => this.props.handleChangefor(event, 'comments')}
                />
                <button onClick={this.handleNext} >Next</button>{/*when the next button is clicked, it will switch to the review component*/}
                <button onClick={this.handlePrevious} >Previous</button>{/*when the next button is clicked, it will switch to the review component*/}

                {/* {JSON.stringify(this.props.comments)} */}

            </div>
        )
    }
}
export default Comments;