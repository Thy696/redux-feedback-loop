import React, { Component } from 'react';

class Comment extends Component {

    handleNext=()=>{ // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/review');
    }

    handleChangefor =() =>{
        console.log('felling input changing')
    }
    render() {
        return (
            <div>
                <h1>Any comment you want to leave?</h1>
                <input type="text" 
                value = {this.props.comments}
                onChange={this.handleChangefor}
                />
                <button onClick={this.handleNext} >Next</button>{/*when the next button is clicked, it will switch to the review component*/}

            </div>
        )
    }
}
export default Comment;