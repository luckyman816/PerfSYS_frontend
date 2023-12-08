import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

export default function InviteModal(props) {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogContent>
        <DialogContentText>Enter the Email Address</DialogContentText>
        <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={props.handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
