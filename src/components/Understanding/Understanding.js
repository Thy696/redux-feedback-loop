import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

//styling for input field
import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';


class Understanding extends Component {


    componentDidMount() {
        console.log('in understanding', this.props);
    }
    handleNextButton = () => { // condition for the input field is not been empty
        if (this.props.feedback.understanding === "") {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/support');
            this.props.dispatch({
                type: 'understanding',
                payload: this.props.feedback.understanding
            })
        }
    }
    handlePrevious = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
        if (this.props.feedback.understanding === "") {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/feeling');
        }
    }

    render() {
        return (
            <div className="component_box understanding_component" >

                <Card>
                    <h2>How well are you understanding the content?</h2>
                </Card>

                    <Box mb={2} mt={4}> {/* Margin top for buttons */}
                        <form noValidate autoComplete="off">
                            <TextField
                                type="number"
                                required id="standard-required"
                                label="Required"
                                // defaultValue="Your feeling"
                                value={this.props.feedback.understanding}
                                onChange={(event) => this.props.handleChangefor(event, 'understanding')}
                            // use the handle change for from component parents (App.js) to handle on change for inpput field
                            />
                        </form>
                    </Box>

                <Box mt={2}> {/* Margin top for buttons */}
                <Button size="small" color="primary" variant="outlined"
                        onClick={this.handlePrevious}>{/*when the next button is clicked, it will switch to the feeling component*/}
                            PREVIOUS
                        </Button>
                    <Button size="small" color="primary" variant="outlined"
                        onClick={this.handleNextButton} >{/*when the next button is clicked, it will switch to the support component*/}
                            NEXT
                        </Button>
                </Box>
                {/* {JSON.stringify(this.props.understanding)} */}

            </div>
        )
    }
}
export default Understanding;