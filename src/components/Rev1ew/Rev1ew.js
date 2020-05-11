import React, { Component } from "react";
// import SubmissionSuccess from '../ReviewItem/ReviewItem'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box';


//styling for snackbar
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';



class Rev1ew extends Component {

    componentDidMount() {
        console.log('in review ', this.props);
    }

    handleSubmit = () => { // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/success');
        this.props.dispatch({ // dispatch all of data in inputs up to index
            type: 'submit',
            //store data inside an array
            payload: this.props.state
        })
        this.props.handleClearInput();
    }

    render() {

        return (
            <div className="component_box">
                <Card>
                    <h1>Giving feedback</h1>
                </Card>
                <CardContent>
                    <p >Feeling: {this.props.feedback.feeling}</p>
                    <p>Understanding: {this.props.feedback.understanding}</p>
                    <p>Support: {this.props.feedback.support}</p>
                    <p>Comment: {this.props.feedback.comments}</p>
                </CardContent>
                <Box mt={2}> {/* Margin top for buttons */}
                    <Button size="small" color="primary" variant="outlined"
                        onClick={this.handleSubmit}>{/*when the next button is cpcked, it will switch to the support component*/}
                            SUBMIT
                        </Button>
                </Box>

            </div>

        )
    }
}

export default Rev1ew;