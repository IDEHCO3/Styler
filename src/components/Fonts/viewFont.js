import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './styles.css'

//Animais-IBGE-1.ttf

export default function ViewFontDialog(props) {

  var fontName = props.font.name
  var fontUrl = props.font.url
  
  const useStyles = makeStyles( theme => ({
    fontContainer: {
      fontFamily: props.font.name ? fontName.split('.')[0] : "",
      fontSize: '40px',
    },
    paper: {
      height: 140,
      width: 100,
      textAlign: "center",
    },
    DialogActions: {
      justifyContent: "space-between",
    },
    titleDialog: {
      textAlign: "center",
    },
  }));

  const classes = useStyles()
  const [caracterList, setCaracterList] = React.useState([])
  
  if( caracterList.length === 0){
    let caracterListTemp = []
    for(var i=1; i<=256; i++) {
      let caracter = String.fromCharCode(i); //transform a intnumber in a char
      caracterListTemp.push(caracter)
    }
    setCaracterList(caracterListTemp)
  }
  
  function handleClose() {
    props.close()
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
        <DialogTitle className={classes.titleDialog}>
          {fontName}
        </DialogTitle>
        <DialogContent>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {caracterList.map( (caracter, index) => (
                  <Grid key={index} item>
                    <Paper className={classes.paper}>
                      {index} 
                      <div className={classes.fontContainer}> {caracter}</div>
                      {caracter}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.DialogActions}>
          <Button variant="outlined" href={fontUrl} color="primary">
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