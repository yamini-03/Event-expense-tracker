import React from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import useStyles from './style'

const EDetails = ({ title }) => {
    const classes = useStyles();
    return (
        <Card className={title === 'overdue' ? classes.overdue : classes.completed}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5"></Typography>
                
            </CardContent>
        </Card>
    )
}

export default EDetails
