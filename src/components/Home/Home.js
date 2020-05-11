import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Box from '@material-ui/core/Box';

class Home extends Component {

    handleClick = () => { // handle Go button to bring the use to the Feeling component
        console.log('go clicked!')
        this.props.history.push('/feeling');
    }

    render() {

        return (
            <div className="home_component component_box">
                <Box mt={4}>
                    <Card  onClick={this.handleClick}>
                        <CardActionArea>
                            <CardContent>
                                <h2>Start giving feedback</h2>
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