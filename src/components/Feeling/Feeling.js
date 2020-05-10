import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class Feeling extends Component {
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
        console.log('in feeling', this.props)
    }

    handleNextButton = () => { // condition for the input field is not been empty
        // let this.props.feeling = 
        if (this.props.feedback.feeling === '') {
            alert('This field is requied');
        } else {
            console.log('Next clicked!')
            // handle next button to moving to understanding component
            this.props.history.push('/understanding');
            this.props.dispatch({
                type: 'feeling',
                payload: this.props.feedback.feeling
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
                            <h2>How are you felling today?</h2>
                            <Typography variant="body2" color="textSecondary">
                                <input type="number" placeholder="Your feeling"
                                    value={this.props.feedback.feeling}
                                    onChange={(event) => this.props.handleChangefor(event, 'feeling')}// use the handle change for from component parents (App.js) to handle on change for inpput field
                                />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" align="right" onClick={this.handleNextButton}>
                            Next
                        </Button>

                    </CardActions>
                </Card>

                {/* {JSON.stringify(this.props.feeling)} */}
            </div>
        )
    }
}
export default Feeling;