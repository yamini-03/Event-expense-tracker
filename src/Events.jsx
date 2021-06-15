import React, { useEffect, useRef } from 'react';
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import EDetails from './events/EComponents/EDetails/EDetails';
import EMain from './events/EComponents/EMain/EMain';
import './index.css';
import useStyles from './styles';
import EList from './events/EComponents/EMain/EList/EList';
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { ErrorPanel, PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import EClist from './events/EComponents/EMain/EClist/EClist';



const Events = () => {
    const classes = useStyles();
    const { speechState } = useSpeechContext();
    const main = useRef(null)

    // const executeScroll = () => main.current.scrollIntoView()    

    // useEffect(() => {
    //   if (speechState === SpeechState.Recording) {
    //     executeScroll();
    //   }
    // }, [speechState]);

    return (
        <div class="events-back" style={{ marginTop: '-60px', }}>
            <Grid className={classes.grid} container spacing={0} container spacing={0} alignItems="left" justify="left" style={{ height: '100vh', marginTop: '60px' }}>
                <Grid item xs={12} sm={5} className={classes.main} style={{ marginLeft: '140px' }}>
                    <EMain />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.mobile} style={{ height: '50vh', marginTop: '100px', marginLeft:'80px', }}>
                    <Card className={classes.income}>
                        <CardHeader></CardHeader>
                        <CardContent >
                            {/* <Typography variant="h5">Pending Events</Typography> */}
                            <h1 className={classes.center}>Pending Events</h1>  
                            <EList />
                        </CardContent>
                    </Card>
                </Grid>
                {/* <Grid item xs={12} sm={3} >
                    <EDetails title="completed" />
                </Grid> */}
                <PushToTalkButtonContainer>
                    <PushToTalkButton />
                    <ErrorPanel />
                </PushToTalkButtonContainer>
            {/* </Grid>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh', marginTop: '-185px' }}> */}
                {/* <Grid item xs={12} sm={3} className={classes.mobile} style={{ marginTop: '20px' }} >
                     <EDetails title="overdue" /> 
                </Grid> */}
                
                {/* <Grid item xs={12} sm={3} className={classes.last} style={{marginTop: '20px' }}>
                     <EClist />
                </Grid> */}
            </Grid>

        </div>
    )
}

export default Events



// import React, { useEffect, useRef } from 'react';
// import { Grid } from '@material-ui/core';
// import EDetails from './events/EComponents/EDetails/EDetails';
// import EMain from './events/EComponents/EMain/EMain';
// import './index.css';
// import { SpeechState, useSpeechContext } from "@speechly/react-client";
// import { ErrorPanel, PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

// const Events = () => {

//   const { speechState } = useSpeechContext();
//   const main = useRef(null)

//   // const executeScroll = () => main.current.scrollIntoView()    

//   // useEffect(() => {
//   //   if (speechState === SpeechState.Recording) {
//   //     executeScroll();
//   //   }
//   // }, [speechState]);

//     return (
//         <div class="events-back">
//            <Grid container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
//         <Grid item xs={12} sm={3}>
//           <EDetails title="overdue" />
//         </Grid>
//         <Grid item xs={12} sm={5}>
//           <EMain /> 
//         </Grid>
//         {/* <Grid item xs={12} sm={4}>
//           <EDetails title="overdue" />
//         </Grid> */}
//         <Grid item xs={12} sm={3} >
//           <EDetails title="completed" />
//         </Grid>
//         <PushToTalkButtonContainer>
//           <PushToTalkButton />
//           <ErrorPanel />
//         </PushToTalkButtonContainer>
//       </Grid>
          
//         </div>
//     )
// }

// export default Events
