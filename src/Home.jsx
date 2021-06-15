import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import qqqqq from './assets/qqqqq.png'
import expmoney from './assets/expmoney.png';
import './index.css';
import Typewriter from 'typewriter-effect';
import logo from './assets/logo.png';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // marginTop: '40px',

    },
    paper: {
        height: 260,
        width: 280,
        backgroundColor: "#999DA0",
        color: "Black",
        marginTop: '100px',
        marginBottom: '140px',
        borderRadius: '50px',
    },

    control: {
        padding: theme.spacing(2),
    },

    type:{
        fontSize: 50,
        marginTop: '120px',
        marginLeft: '120px',
    }

}));

const Home = () => {

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (
        
            <div class="home-back">
            {/* <div style={{  backgroundImage: `url(${ background })` , backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        marginTop: '0px',
        height: '754px',
        width: '1517px',
         }}> */}
        
            {/* <Typewriter className={classes.type}
                options={{
                    strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true,
                }}
            /> */}
           
                <br></br><br></br>
                <div align="center" style={{ fontSize:'48px', }}><b><img src={logo} height='100px' width='100px' />Managify </b></div>
                <br></br><br></br><br></br><br></br>
            

<div className="App">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("'The key is in not spending , but Managing it...'")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("'The shorter way to do many things is to only do one thing at a time....'")
       .start();
       }}
       />
    </div>

            <Grid container className={classes.root} spacing={1}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={8}>
                        {[1].map((value) => (
                            <Grid key={value} item>
                                <Link to="/Expense">
                                    <Paper className={classes.paper}>
                                        <img src={expmoney} alt="expense tracker" height='150px' width='135px' style={{ marginLeft: '70px', marginTop: '7px', }} />

                                        <Typography style={{ marginLeft: '50px', marginTop: '0px', }}><h2>PocketMoney & Expense Tracker </h2> </Typography>
                                    </Paper>
                                </Link>
                            </Grid>
                        ))}
                        {[1].map((value) => (
                            <Grid key={value} item>
                                <Link to="/Events">
                                    <Paper className={classes.paper}>
                                        <img src={qqqqq} alt="events tracker" height='150px' width='135px' style={{ marginLeft: '70px', marginTop: '24px', }} />

                                        <Typography style={{ marginLeft: '50px', marginTop: '0px', }}><h2>Events Tracker</h2> </Typography>
                                    </Paper>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
        
         </div>




    )
}

export default Home
