import React, { Component } from 'react';
import FeedbackItem from '../FeedbackItem/FeedbackItem'

class Admin extends Component {
    render() {
        return (
            <div>
                <h1>this is admin</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <FeedbackItem 
                        />

                    </tbody>

                </table>
                {JSON.stringify(this.props.reduxState)}

            </div>
        )
    }
}
export default Admin;