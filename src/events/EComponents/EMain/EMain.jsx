import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid ,Divider} from '@material-ui/core';
import useStyles from './styles';
import EForm from './EForm/EForm';
import EList from './EList/EList';
import InfoCard from '../InfoCard'

const EMain = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root} style={{ borderRadius: '10px', marginTop: '27px', height:'500px' }}>
            <CardHeader title="Event Tracker" subheader="Powered by Speechly" align='center' />
            <CardContent>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard />
                </Typography>
                <Divider />
                <EForm/>
            </CardContent>
            {/* <CardContent className={ classes.cardContent }>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <EList />
                    </Grid>
                </Grid>
            </CardContent> */}
        </Card>
    );
}

export default EMain
