import React, { useEffect, useRef } from 'react';
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core';

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import { Details, Main } from './components';
import List from './components/Main/List/List';
import useStyles from './styles';
import expvector from './assets/expvector.png';

const Expense = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div class='exp-back' style={{ marginTop: '-60px', }}>
      <Grid className={classes.grid} container spacing={0} alignItems="left" justify="left" style={{ height: '100vh', marginTop: '60px'}}>
       
        <Grid ref={main} item xs={12} sm={4} className={classes.main} style={{ marginLeft: '140px' }}>
          <Main />
        </Grid>
        <Grid  item xs={12} sm={4} className={classes.main} style={{ marginLeft: '140px' }}>
          <img src={expvector} style={{ marginLeft: '80px', marginTop: '170px', width: '590px' , height: '350px' }}/>
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh',  marginTop: '-285px'}}>
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Pocket Money" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Card className={classes.income}>
            <CardHeader></CardHeader>
            <CardContent>
              <Typography variant="h5">Pending Events</Typography>
              <List/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Expense;




// import React, { useEffect, useRef } from 'react';
// import { Grid } from '@material-ui/core';

// import { SpeechState, useSpeechContext } from "@speechly/react-client";
// import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

// import { Details , Main } from './components';
// import useStyles from './styles';
// import './index.css';

// const Expense = () => {
//   const classes = useStyles();
//   const { speechState } = useSpeechContext();
//   const main = useRef(null)

//   const executeScroll = () => main.current.scrollIntoView()    

//   useEffect(() => {
//     if (speechState === SpeechState.Recording) {
//       executeScroll();
//     }
//   }, [speechState]);

//   return (
//     <div class="exp-back">
//       {/* <div style={{  backgroundImage: `url(${ money })` , backgroundPosition: 'center',
//         backgroundSize: '100% 90%',
//         backgroundRepeat: 'no-repeat',
//         marginTop: '-36px',
//         height: '100%',
//         width: '100%' }}></div> */}
//       <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
//         <Grid item xs={12} sm={4} className={classes.mobile} >
//           <Details title="Pocket Money" />
//         </Grid>
//         <Grid ref={main} item xs={12} sm={3} className={classes.main}>
//           <Main />
//         </Grid>
//         <Grid item xs={12} sm={4} className={classes.desktop}>
//           <Details title="Pocket Money" />
//         </Grid>
//         <Grid item xs={12} sm={4} className={classes.last}>
//           <Details title="Expense" />
//         </Grid>
//         <PushToTalkButtonContainer>
//           <PushToTalkButton />
//         </PushToTalkButtonContainer>
//       </Grid>
//     </div>
//   );
// };

// export default Expense;
