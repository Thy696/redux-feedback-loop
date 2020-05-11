import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


import Box from '@material-ui/core/Box';

class Home extends Component {

    handleClick = () => { // handle Go button to bring the use to the Feeling component
        console.log('go clicked!')
        this.props.history.push('/feeling');
    }

    comBackHomeClick = () =>{
        console.log('clicked!');
        this.props.history.push('/feeling')
    }
    render() {

        return (
            <div>
                 

                <Box mt={4}>
                    <Card  onClick={this.handleClick}>
                        <CardActionArea>
                            <CardContent>
                                <Button variant="contained" color="primary" >Start giving feedback</Button>
                            </CardContent>
                        </CardActionArea>
                        {/*when "Start giving feedback" is clicked, it will switch to the feeling component*/}

                    </Card>
                </Box>
            </div>
        )
    }
}
export default Home;