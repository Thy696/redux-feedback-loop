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

    render() {

        return (
            <div>
                <Box mt={4} ml={50} mr={50}>
                    <Card>
                        {/* <CardActionArea> */}
                        <CardContent>
                            <h4>How are you feeling today? Let give us some feedback.</h4>
                            <Button variant="contained" color="primary"
                                onClick={this.handleClick}
                            >Start giving feedback</Button>
                        </CardContent>
                        {/* </CardActionArea>  */}
                        {/*when "Start giving feedback" is clicked, it will switch to the feeling component*/}

                    </Card>
                </Box>
            </div>
        )
    }
}
export default Home;