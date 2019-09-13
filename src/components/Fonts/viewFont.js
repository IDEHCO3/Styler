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
      fontSize: '50px',
    },
    paper: {
      height: 140,
      width: 100,
    },
  }));

  const classes = useStyles()
  const caracterList = []
  if(caracterList.length===0){
    for(var i=1; i<=255; i++) {
      let character = String.fromCharCode(i);
      caracterList.push(character)
    }
    console.log(caracterList.length)
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
        <DialogTitle id="max-width-dialog-title">{fontName}</DialogTitle>
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