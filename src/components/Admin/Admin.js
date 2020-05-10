import React, { Component } from 'react';

import FeedbackItem from '../FeedbackItem/FeedbackItem'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class Admin extends Component {
    //Styling with Material-UI
    StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);


    useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });
    //End styling with Material-UI

    render() {
        const classes = this.useStyles;

        return (
            <div className="table_feedback">
                {/* Use Material-UI to styling table  */}
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <this.StyledTableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell >Understanding</TableCell>
                                <TableCell >Support</TableCell>
                                <TableCell >Comment</TableCell>
                                <TableCell >Delete</TableCell>
                            </this.StyledTableRow>
                        </TableHead>
                        <TableBody>
                                {this.props.feedbacks.map((feedback) => {
                                    return (
                                        <TableRow key={feedback.id}>
                                            <FeedbackItem
                                                key={feedback.id}
                                                feedback={feedback}
                                                deleteFeedback={this.props.deleteFeedback}
                                            />
                                        </TableRow>
                                    )
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* {JSON.stringify(this.props.feedbacks)} */}

            </div >
        )
    }
}
export default Admin;