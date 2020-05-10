import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

class SubmissionSuccess extends Component {

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


    handleButton = () => {
        console.log('Next clicked!')
        // handle next button to moving to understanding component
        this.props.history.push('/');

    }

    render() {
        const classes = this.useStyles;

        return (
            <div>
                <h1>Feedback!</h1>
                <div>
                    <h2>Thank you!</h2>
                    <button onClick={this.handleButton}>Leave New Feedback</button>
                </div>

            </div>
        )
    }
}

export default SubmissionSuccess;