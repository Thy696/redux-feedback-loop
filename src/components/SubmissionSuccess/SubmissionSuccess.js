import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Box from '@material-ui/core/Box';


class SubmissionSuccess extends Component {


    handleButton = () => {
        console.log('Next clicked!')
        // handle next button to moving to understanding component
        this.props.history.push('/');

    }

    render() {

        return (
            <div className="component_box">
                {/* Styling for card feedback  */}
                <h1>Thank you!</h1>
                <Box mt={3}>
                    <Card onClick={this.handleButton}>
                        <CardActionArea>
                            <CardContent>
                                <h2 >Leave New Feedback</h2>
                                {/*when the next button is clicked, it will switch to the home component*/}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>



            </div >
        )
    }
}

export default SubmissionSuccess;