import React, { Component } from 'react';

class FeedbackItem extends Component {
    render() {
        return (
            <>
            {this.props.feedbacks.map((feedback) => { //loop though the array galleyItems with paramether is picture to display pictures in DOM
                            return (
                                <>
                                    
                                </>
                            )
                        })}
            </>
        )
    }
}
export default FeedbackItem;