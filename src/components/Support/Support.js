import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Support extends Component {

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
            this.props.dispatch({
                type: 'support',
                payload: this.props.feedback.support
            })
        }
    }


    render() {
        const classes = this.useStyles;

        return (
            <div className="component_box">
                <Card className={classes.root}>
                    <CardActionArea>

                        <CardContent>
                            <h2> How well are you being supported?</h2>
                            <Typography variant="body2" color="textSecondary" >
                                <input type="number"
                                    value={this.props.feedback.support}
                                    onChange={(event) => this.props.handleChangefor(event, 'support')}
                                />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={this.handlePrevious}>{/*when the next button is clicked, it will switch to the understanding component*/}
                            Previous
                        </Button>
                        <Button size="small" color="primary" onClick={this.handleNext}>{/*when the next button is clicked, it will switch to the comment component*/}
                            Next
                        </Button>


                    </CardActions>
                </Card>


                {/* {JSON.stringify(this.props.support)} */}
            </div>
        )
    }
}
export default Support;