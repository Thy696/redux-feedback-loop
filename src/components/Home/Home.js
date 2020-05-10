import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

class Home extends Component {
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


    handleGo = () => { // handle Go button to bring the use to the Feeling component
        console.log('go clicked!')
        this.props.history.push('/feeling');

    }

    render() {
        const classes = this.useStyles;

        return (
            <div className="home_component component_box">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <h2  onClick={this.handleGo} >Start giving feedback</h2>
                        </CardContent>
                    </CardActionArea>
                    {/*when the Go button is clicked, it will switch to the feeling component*/}
                   
                </Card>

            </div>
        )
    }
}
export default Home;