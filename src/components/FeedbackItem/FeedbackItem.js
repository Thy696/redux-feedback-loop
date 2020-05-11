import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';



class FeedbackItem extends Component {
    //Styling with Material-UI


    useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }));

   
    //End styling with Material-UI

    handleDeleteBtn = () => {
        console.log('delete btn clicked!')
        console.log('id of feedback to delete', this.props.feedback.id);
        this.props.deleteFeedback(this.props.feedback.id)
    }

    render() {
        const classes = this.useStyles;

        return (
            <>
                <TableCell >{this.props.feedback.feeling}</TableCell>
                <TableCell >{this.props.feedback.understanding}</TableCell>
                <TableCell >{this.props.feedback.support}</TableCell>
                <TableCell >{this.props.feedback.comments}</TableCell>
                {/* <TableCell ><button onClick={() => this.handleDeleteBtn(this.props.feedback.id)}>Delete</button></TableCell> */}

                <TableCell >
                    <IconButton 
                    aria-label="delete" 
                    className={classes.margin} 
                    onClick={() => this.handleDeleteBtn(this.props.feedback.id)}
                    >
                        <DeleteIcon fontSize="large" />
                    </IconButton>

                </TableCell>
                {/* {JSON.stringify(this.props.feedback)} */}

            </>
        )
    }
}
export default FeedbackItem;