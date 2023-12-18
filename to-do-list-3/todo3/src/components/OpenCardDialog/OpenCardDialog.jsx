import './OpenCardDialog.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment, useState } from 'react';

export default function OpenCardDialog({ open, dialogHandler, cardBoard, addCard }) {

  const [text, setText] = useState("");

  const cardCreate = () => {
    if (text != "") {
      addCard(cardBoard.id, text);
      dialogHandler();
      setText("");
    }
  }

  return (
    <Fragment>
      <Button id='Button' variant="outlined" onClick={dialogHandler}>
        + ADICIONAR OUTRO CARD
      </Button>
      <Dialog
        open={open}
        onClose={dialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Criar Tarefa"}
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth onChange={(e) => setText(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Disagree</Button>
          <Button onClick={cardCreate}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}