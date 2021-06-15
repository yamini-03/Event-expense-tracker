import React, { useContext } from 'react';
import { List as MUIList , ListItem , ListItemAvatar , ListItemText , Avatar,  ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import AssignmentIcon from '@material-ui/icons/Assignment';
import useStyles from './style';
// import { isClassExpression } from 'typescript';

import { ExpenseTrackerContext } from '../../../EContext/context';

const EClist = () => {
    const classes = useStyles();
    const { transactions1} = useContext(ExpenseTrackerContext); 
       return (
        <MUIList dense={false} className={classes.list}>
      { transactions1.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={ classes.assign }>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`${transaction.subject} - ${transaction.date}`} />
          </ListItem>
        </Slide>
      ))}
    </MUIList>
    );
};

export default EClist;
