import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Swal from 'sweetalert2'

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

//handle delete feedback with SweetAlert2
    handleDeleteBtn = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {

                console.log('delete btn clicked!')
                console.log('id of feedback to delete', this.props.feedback.id);
                this.props.deleteFeedback(this.props.feedback.id);

                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'This feedback has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'This feedback is safe.',
                    'error',
                )
            }
        })
    }


    render() {
        const classes = this.useStyles;

        return (
            <>
                <TableCell >{this.props.feedback.feeling}</TableCell>
                <TableCell >{this.props.feedback.understanding}</TableCell>
                <TableCell >{this.props.feedback.support}</TableCell>
                <TableCell >{this.props.feedback.comments}</TableCell>

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