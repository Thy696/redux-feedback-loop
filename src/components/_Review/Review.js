import React, { Component } from 'react';

class Review extends Component {

    state={ //Create an state to store all of data that user input
        review: [],
      }

    render() {
        return (
            <div>
                {/*I create an form to submit all of the data which was the user type on the inputs in components
                 and the send it to database */}
                <form onSubmit={this.handleSubmit}>
                    <h1>Review you feedback</h1>
                    <p>Feeling: </p>
                    <p>Understanding: </p>
                    <p>Support: </p>
                    <p>Comments: </p>
                    <input type="submit" />
                </form>


            </div>
        )
    }
}
export default Review;