import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ViewSvgDialog(props) {

  var itemName = props.item.name
  var itemUrl = props.item.url
  
  const useStyles = makeStyles( theme => ({
    titleDialog: {
      textAlign: "center",
    },
    DialogActions: {
      justifyContent: "space-between",
    }
  }));

  const classes = useStyles()
  
  function handleClose() {
    props.close()
  }

  return (
    <React.Fragment>
      <Dialog
        maxWidth="lg"
        open={props.open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle className={classes.titleDialog}>
          {itemName}
        </DialogTitle>
        <DialogContent>
          <img alt={itemName} src={itemUrl} height="500" width="500" />
        </DialogContent>
        <DialogActions className={classes.DialogActions}>
          <Button variant="outlined" href={itemUrl} target="blank" color="primary">
            Download
          </Button>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}