import React, { Component } from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';



class FeedbackItem extends Component {
    //Styling with Material-UI
    TableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);


    useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });
    //End styling with Material-UI

    handleDeleteBtn = (index) => {
        console.log('delete btn clicked!')
        console.log('id of feedback to delete', this.props.feedback.id);
        this.props.deleteFeedback(this.props.feedback.id)
    }

    render() {
        return (
            <>
                <TableCell >{this.props.feedback.feeling}</TableCell>
                <TableCell >{this.props.feedback.understanding}</TableCell>
                <TableCell >{this.props.feedback.support}</TableCell>
                <TableCell >{this.props.feedback.comments}</TableCell>
                <TableCell ><button onClick={() => this.handleDeleteBtn(this.props.feedback.id)}>Delete</button></TableCell>
                {/* {JSON.stringify(this.props.feedback)} */}
            </>
        )
    }
}
export default FeedbackItem;