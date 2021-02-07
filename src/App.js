import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import { getMatches } from './Api/Api';
import {React,useEffect,useState} from 'react'
import MyCard from './components/MyCard';
function App() {
  const[matches,setMatches]= useState([])
  useEffect(() => {getMatches()
    .then(data=>{setMatches(data.matches)
    console.log("DATA",data.matches)})
    .catch(error=>alert("Error : "+error))}, [])
  return (
    <div className="App">
      <Navbar></Navbar>
      <Typography variant='h3' style={{marginTop:20}}>Welcome to Live Score App</Typography>
      <Grid container>
        <Grid sm='2'></Grid>
        <Grid sm='8'>
        {matches.map((match)=><MyCard key={match.unique_id} match={match}></MyCard>)}
        </Grid>
      </Grid>
      
      
    </div>
  );
}

export default App;
