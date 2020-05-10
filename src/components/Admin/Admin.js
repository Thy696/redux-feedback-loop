import React, { Component } from 'react';


class Admin extends Component {


    render() {
        return (
            <div>
                <h1>this is admin</h1>
                <table className='table-feedback'>
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
                        {this.props.feedbacks.map((feedback) =>
                            <tr key={feedback.id}>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments}</td>
                            </tr>)}
                    </tbody>

                </table>
                {JSON.stringify(this.props.dispatch)}

            </div>
        )
    }
}
export default Admin;