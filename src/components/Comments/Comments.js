import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Comments extends Component {

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
        console.log('in comment', this.props);
    }

    handleNext = () => { // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/review');
        this.props.dispatch({
            type: 'comments',
            payload: this.props.feedback
        })
    }

    handlePrevious = () => { // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/support');
        this.props.dispatch({
            type: 'comments',
            payload: this.props.feedback
        })
    }

    handleChangefor = () => {
        console.log('felling input changing')
    }
    render() {
        const classes = this.useStyles;

        return (
            <div className="component_box">

                <Card className={classes.root}>
                    <CardActionArea>

                        <CardContent>
                            <h2>Any comment you want to leave?</h2>
                            <Typography variant="body2" color="textSecondary" >
                                <input type="text"
                                    value={this.props.feedback.comments}
                                    onChange={(event) => this.props.handleChangefor(event, 'comments')}
                                />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={this.handlePrevious}>{/*when the next button is clicked, it will switch to the support component*/}
                            Previous
                        </Button>

                        <Button size="small" color="primary" onClick={this.handleNext} >{/*when the next button is clicked, it will switch to the review component*/}
                            Next
                        </Button>

                    </CardActions>
                </Card>


                {/* {JSON.stringify(this.props.comments)} */}

            </div>
        )
    }
}
export default Comments;