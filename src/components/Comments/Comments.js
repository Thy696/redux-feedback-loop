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
                    onChange={(event) => this.props.handleChangefor(event,'comment')}
                />
                <button onClick={this.handleNext} >Next</button>{/*when the next button is clicked, it will switch to the review component*/}
                {JSON.stringify(this.props.comments)}

            </div>
        )
    }
}
export default Comment;