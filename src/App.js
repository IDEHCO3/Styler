import React from 'react';
import NavBar from './components/NavBar'
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // fonte do material design

const theme = createMuiTheme({
  palette: {
    primary: { main:'#4caf50' },
    secondary: { main:'#03DAC6' },
  }
});

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <NavBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
