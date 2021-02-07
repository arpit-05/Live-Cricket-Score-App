import { Card, CardActions, Button,CardContent, Typography, Grid, Dialog, DialogTitle, DialogContent ,DialogContentText} from '@material-ui/core'
import {Fragment, React,useState} from 'react'
import { getMatchDeatils } from '../Api/Api'
const MyCard=({match})=>{
    const[detail,setDetail]=useState({})
    const[open,setOpen]=useState(false)
    const handleClick=(id)=>{
        getMatchDeatils(id)
        .then(data=>{setDetail(data) 
            console.log("MATCH DATA",data)})
        .catch(error=>alert("Error :"+error))
        handleOpen();
    }
    const getDialog=()=>{
        return(
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-description">
                    Match Details...
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                    {detail.matchStarted? <div><Typography>{detail.stat}</Typography>
                        <Typography>
                            Match : Started
                        </Typography>
                        <Typography>
                            Toss Won :
                            <span style={{fontStyle:'italic',fontWeight:'bold'}}></span>
                            {" "+match.toss_winner_team}
                        </Typography>
                        <Typography>
                            Match Type :
                            <span style={{fontStyle:'italic',fontWeight:'bold'}}></span>
                            {" "+match.type}
                        </Typography>
                        <Typography>
                           Score :
                            <span style={{fontStyle:'italic',fontWeight:'bold'}}></span>
                            {" "+detail.score} </Typography>
                            <Typography>
                            Team Won :
                            <span style={{fontStyle:'italic',fontWeight:'bold'}}></span>
                            {" "+match.winner_team}
                        </Typography></div>:" Match still not started"}
                       
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            
        )
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    }
    const getMatchCard=()=>{ 
        return (
            <Card style={{marginTop:20}}>
                <CardContent>
                    <Grid container justify='center' alignItems='center' spacing={4}>
                        <Grid item>
                        <Typography variant='h5'>{match["team-1"]}</Typography>
                    <Grid item>
                    <img style={{width:85}} src='images/vs.png'
                    />
                    </Grid>
                    <Grid item>
                        <Typography variant='h5'>{match["team-2"]}</Typography>
                    </Grid>
                        </Grid>
                   
                    </Grid>
                   
                </CardContent>
                <CardActions>
                    <Grid container justify='center' alignItems='center'>
                    <Button onClick={()=>{handleClick(match.unique_id)}} variant='contained' color='primary'>Show Detail</Button>
                    <Button style={{margin:5}} variant='contained' color='primary'>Starting Time {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                    </Grid>
                    
                </CardActions>
            </Card>
        )
    }
    return(
        <Fragment>
            {getMatchCard()}
            {getDialog()}
        </Fragment>
    ) 
}
export default MyCard;