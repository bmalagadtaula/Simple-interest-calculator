import  React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.css';

const App=()=>{
/* for functionality*/
const [p, setP] = useState(0);
const [t, setT] = useState(0);
const [r, setR] = useState(0);
const [SI, setSI] = useState(0);

const btn=()=>{
  setSI (p*t*r/100);
}
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
  
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          💸Simple Interest 
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
    <center className="simpleinterest">
      
    <TextField onChange={(event)=>setP(event.target.value)} id="outlined-basic" label="P" variant="outlined" /><br/>
    <TextField onChange={(event)=>setT(event.target.value)} id="outlined-basic" label="T" variant="outlined" /><br/>
    <TextField onChange={(event)=>setR(event.target.value)} id="outlined-basic" label="R" variant="outlined" /><br/>
    <br/>
    <Button onClick={()=>btn()} variant="contained">Calculate</Button>
    <Typography variant="subtitle1" gutterBottom>
       Simple interest is: {SI}
      </Typography>
    </center>
    </div>
  );
}

export default App;
