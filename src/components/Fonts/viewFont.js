import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import './styles.css'

//Animais-IBGE-1.ttf
const useStyles = makeStyles(theme => ({
  fontContainer: {
    color: 'red',
    fontFamily: 'Animais-IBGE-1',
    fontSize: '50px',
  },
}));

export default function ViewFontDialog(props) {
  const classes = useStyles();
  const fontName = props.font.name
  const fontUrl = props.font.url

  
  function handleClose() {
    props.close();
  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={props.open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{fontName}</DialogTitle>
        <DialogContent>
          <div className={classes.fontContainer}>
            A B C D E F G
          </div>
        </DialogContent>
        <DialogActions>
          <Button href={fontUrl} color="primary">
            Download
          </Button>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}