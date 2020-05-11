import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

//styling for input field
import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';

class Support extends Component {
    componentDidMount() {
        console.log('in support', this.props);
    }

    handleNext = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
        if (this.props.feedback.support === "") {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/comments');
            this.props.dispatch({
                type: 'support',
                payload: this.props.feedback.support
            })
        }
    }

    handlePrevious = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
        if (this.props.feedback.support === "") {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/understanding');
        }
    }

    render() {

        return (
            <div className="component_box">
                {/* Styling for card feedback  */}
                <Card>
                    <h2> How well are you being supported?</h2>
                </Card>
                <Box mb={2} mt={4}> {/* Margin top for buttons */}
                    <form noValidate autoComplete="off">
                        <TextField
                            type="number"
                            required id="standard-required"
                            label="Required"
                            // defaultValue="Your feeling"
                            value={this.props.feedback.support}
                            onChange={(event) => this.props.handleChangefor(event, 'support')}
                        // use the handle change for from component parents (App.js) to handle on change for inpput field
                        />
                    </form>
                </Box>
                <Box mt={2}> {/* Margin top for buttons */}
                    <Button size="small" color="primary" variant="outlined"
                        onClick={this.handlePrevious}>{/*when the next button is clicked, it will switch to the comment component*/}
                            PREVIOUS
                        </Button>
                    <Button size="small" color="primary" variant="outlined"
                        onClick={this.handleNext}>{/*when the next button is clicked, it will switch to the understanding component*/}
                            NEXT
                        </Button>
                </Box>
                {/* {JSON.stringify(this.props.support)} */}
            </div>
        )
    }
}
export default Support;