import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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
            <div className="component_box">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <h1>Feedback!</h1>
                        </CardContent>
                    </CardActionArea>

                    <Button size="small" color="primary" onClick={this.handleButton} >{/*when the next button is clicked, it will switch to the support component*/}
                        Leave New Feedback
                        </Button>
                </Card>



            </div>
        )
    }
}

export default SubmissionSuccess;