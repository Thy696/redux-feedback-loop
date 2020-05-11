import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
//styling for input field
import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';

class Feeling extends Component {

    componentDidMount() {
        console.log('in feeling', this.props)
    }

    //handle NEXT button
    handleNext = () => {
        // condition for the input field is not been empty
        if (this.props.feedback.feeling === '') {
            alert('This field is requied');
        } else if (this.props.feedback.feeling >= 6) {
            alert('Please give a rating 1-5')
        } else {
            console.log('Next clicked!')
            // handle next button to moving to component understanding 
            this.props.history.push('/understanding');
            this.props.dispatch({
                type: 'feeling',
                payload: this.props.feedback.feeling
            })
        }

    }

    render() {

        return (
            <div className="component_box">
                {/* Styling for card feedback  */}
                <Card className="card_header">
                    <h2>How are you felling today?</h2>
                </Card>

                <Box mb={2}> {/* Margin top for buttons */}
                    <form noValidate autoComplete="off">
                        <h5>Giving a rating 1-5</h5>

                        <TextField
                            type="number"
                            required id="standard-required"
                            label="Required"
                            value={this.props.feedback.feeling}
                            onChange={(event) => this.props.handleChangefor(event, 'feeling')}
                        // use the handle change for from component parents (App.js) to handle on change for inpput field
                        />
                    </form>
                </Box>

                <Box mt={2}> {/* Margin top for buttons */}
                    <Button size="small" color="primary"
                        variant="contained"
                        onClick={this.handleNext}> {/*when the next button is clicked, it will switch to the understanding component*/}
                        NEXT
                    </Button>
                </Box>
                {/* {JSON.stringify(this.props.feeling)} */}
            </div>
        )
    }
}
export default Feeling;