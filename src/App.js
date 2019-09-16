import React from 'react';
import NavBar from './components/NavBar'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//import { blue, green }  from '@material-ui/core/colors';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // fonte do material design
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main:'#4caf50' },
    secondary: { main:'#03DAC6' },
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
