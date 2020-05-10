import React, { Component } from "react";
// import SubmissionSuccess from '../ReviewItem/ReviewItem'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

//styling for snackbar
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';



class Rev1ew extends Component {

    // Styling with Material-UI

    useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });

    //-----------------------------

 

    // End styling with Material-UI


    componentDidMount() {
        console.log('in review ', this.props);
    }


    handleSubmit = () => { // handle next button to moving to understanding component
        console.log('Next cpcked!')
        this.props.history.push('/success');
        this.props.dispatch({ // dispatch all of data in inputs up to index
            type: 'submit',
            //store data inside an array
            payload: this.props.state
        })
    }

    render() {
        const classes = this.useStyles;


        return (
            <div className="component_box">
                <Card className={classes.root}>
                    <CardActionArea>

                        <CardContent>
                            <h1>Giving feedback</h1>
                            <p>Feeling: {this.props.feedback.feeling}</p>
                            <p>Understanding: {this.props.feedback.understanding}</p>
                            <p>Support: {this.props.feedback.support}</p>
                            <p>Comment: {this.props.feedback.comments}</p>
                        </CardContent>
                    </CardActionArea>
                        <Button size="small" color="primary" onClick={this.handleSubmit}>{/*when the next button is cpcked, it will switch to the support component*/}
                            Submit
                        </Button>
                </Card>
                

            </div>

        )
    }
}

export default Rev1ew;