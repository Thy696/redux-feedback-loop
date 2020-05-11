import React, { Component } from 'react';

//Styling for card input feedback
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//styling for input field
import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';


class Comments extends Component {

    componentDidMount() {
        console.log('in comment', this.props);
    }

    handleNext = () => { // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/review');
        this.props.dispatch({
            type: 'comments',
            payload: this.props.feedback
        })

    }

    handlePrevious = () => { // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/support');
        this.props.dispatch({
            type: 'comments',
            payload: this.props.feedback
        })
    }

    handleChangefor = () => {
        console.log('felling input changing')
    }

    render() {

        return (
            <div className="component_box">
                {/* Styling for card feedback  */}
                <Card>
                    <h2>Any comment you want to leave?</h2>
                </Card>

                <Typography variant="body2" color="textSecondary">
                    <Box mb={2} mt={4}> {/* Margin top for buttons */}
                        <form noValidate autoComplete="off">
                            <TextField
                                type="text"
                                id="outlined-multiline-static"
                                multiline
                                rows={8}
                                variant="outlined"
                                label="Required"
                                value={this.props.feedback.comments}
                                onChange={(event) => this.props.handleChangefor(event, 'comments')}
                            // use the handle change for from component parents (App.js) to handle on change for inpput field
                            />
                        </form>
                    </Box>
                </Typography>

                <Box mt={2}> {/* Margin top for buttons */}
                <Button size="small" color="primary" variant="outlined"
                        onClick={this.handlePrevious}>{/*when the next button is clicked, it will switch to the support component*/}
                            Previous
                        </Button>

                    <Button size="small" color="primary" variant="outlined"
                        onClick={this.handleNext} >{/*when the next button is clicked, it will switch to the review component*/}
                            Next
                        </Button>
                </Box>
                {/* {JSON.stringify(this.props.comments)} */}

            </div>
        )
    }
}
export default Comments;