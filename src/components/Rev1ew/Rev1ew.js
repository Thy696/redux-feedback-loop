import React, { Component } from "react";
// import SubmissionSuccess from '../ReviewItem/ReviewItem'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';

import Swal from 'sweetalert2'

class Rev1ew extends Component {

    componentDidMount() {
        console.log('in review ', this.props);
    }

    //Use SweetAlert 2 for handle submit when user submitting feedback successful
    handleSubmit = () => { // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/success');
        this.props.dispatch({ // dispatch all of data in inputs up to index
            type: 'submit',
            //store data inside an array
            payload: this.props.state
        })
        this.props.handleClearInput();
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your feedback has been saved',
            showConfirmButton: false,
            timer: 1500
        })

    }

    handlePrevious = () => { // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/comments');
    }

    //handle edit input in components 
    handleEditFeeling = () => {
        this.props.history.push('/feeling');
    }
    handleEditUnderstanding = () => {
        this.props.history.push('/understanding');
    }
    handleEditSupport = () => {
        this.props.history.push('/support');
    }
    handleEditComment = () => {
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div className="component_box">
                <Card>
                    <h1>Review Your Feedback</h1>
                </Card>
                <CardContent>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={this.handleEditFeeling}>
                        Feelings: {this.props.feedback.feeling}
                    </Link><br />

                    <Link
                        component="button"
                        variant="body2"
                        onClick={this.handleEditUnderstanding}>
                        Understanding: {this.props.feedback.understanding}
                    </Link><br />

                    <Link
                        component="button"
                        variant="body2"
                        onClick={this.handleEditSupport}>
                        Support: {this.props.feedback.support}
                    </Link><br />

                    <Link
                        component="button"
                        variant="body2"
                        onClick={this.handleEditComment}>
                        Comments: {this.props.feedback.comments}
                    </Link><br />

                </CardContent>
                <Box mt={2}> {/* Margin top for buttons */}
                    <Button size="small" color="primary" variant="outlined"
                        onClick={this.handlePrevious}>{/*when the next button is cpcked, it will switch to the support component*/}
                            BACK
                        </Button>
                    <Button size="small" color="primary" variant="contained"
                        onClick={this.handleSubmit}
                    >{/*when the next button is cpcked, it will switch to the support component*/}
                            SUBMIT
                        </Button>
                </Box>
            </div>
        )
    }
}

export default Rev1ew;