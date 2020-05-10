import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Understanding extends Component {

    // Styling with Material-UI
    useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });
    // End styling with Material-UI


    componentDidMount() {
        console.log('in understanding', this.props);
    }
    handleNextButton = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
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
            this.props.dispatch({
                type: 'understanding',
                payload: this.props.feedback.understanding
            })
        }
    }



    render() {
        const classes = this.useStyles;

        return (
            <div className="component_box understanding_component" >

                <Card className={classes.root}>
                    <CardActionArea>

                        <CardContent>
                            <h2>How well are you understanding the content?</h2>
                            <Typography variant="body2" color="textSecondary" >
                                <input type="number"
                                    value={this.props.feedback.understanding}
                                    onChange={(event) => this.props.handleChangefor(event, 'understanding')}
                                />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <Button size="small" color="primary" onClick={this.handlePrevious}>{/*when the next button is clicked, it will switch to the feeling component*/}
                            Previous
                        </Button>
                        <Button size="small" color="primary" onClick={this.handleNextButton} >{/*when the next button is clicked, it will switch to the support component*/}
                            Next
                        </Button>
                </Card>


                {/* {JSON.stringify(this.props.understanding)} */}

            </div>
        )
    }
}
export default Understanding;