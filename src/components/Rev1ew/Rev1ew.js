import React, { Component } from "react";
// import ReviewItem from '../ReviewItem/ReviewItem'

class Rev1ew extends Component {

    render() {
        return (
            <div>
                <h1>Giving feedback</h1>
                {/* {this.props.review.map((feedback) => */}
                    <ul>
                        <li>Feeling: {this.props.feeling}</li>
                        <li>Understanding: {this.props.understanding}</li>
                        <li>Support: {this.props.support}</li>
                        <li>Comment: {this.props.comment}</li>
                    </ul>
                {/* )} */}
            </div>

        )
    }
}

export default Rev1ew;