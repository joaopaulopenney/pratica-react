import './OpenMoveCardDialog.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment } from 'react';

export default function OpenMoveCardDialog({ open, dialogHandler, cardBoardsDialog}) {

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={dialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Abc"}
        </DialogTitle>
        <DialogContent>
            {cardBoardsDialog}
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Disagree</Button>
          <Button onClick={dialogHandler}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}