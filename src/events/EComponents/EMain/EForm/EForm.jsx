import React, { useState, useContext, useEffect } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { v4 as uuidv4 } from 'uuid';
import { Subtitles } from '@material-ui/icons';

import { useSpeechContext } from '@speechly/react-client';
import Snackbar from '../../Snackbar/Snackbar';
import formatDate from '../../../../utils/formatDate';
import { ExpenseTrackerContext } from '../../../EContext/context';
import { eventCategories, eventSubject } from '../../../../constants/categories';

const initialState = {
    category: '',
    subject: 'Dbms',
    date: formatDate(new Date()),
};


const EForm = () => {

    const classes = useStyles();
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const [formData, setFormData] = useState(initialState);
    const { segment } = useSpeechContext();
    const [open, setOpen] = React.useState(false);

    const createEvent = () => {
        if (!formData.date.includes('-')) return;

        // if (eventCategories.map((iC) => iC.type).includes(formData.category)) {
        //   setFormData({ ...formData, category: 'Exam' });
        // } else if (expenseCategories.map((iC) => iC.type).includes(formData.category)) {
        //   setFormData({ ...formData, type: 'Expense' });
        // }

        setOpen(true);
        addTransaction({ ...formData, id: uuidv4() });
        setFormData(initialState);
    };

    useEffect(() => {
        if (segment) {
          if (segment.intent.intent === 'add_assignment') {
            setFormData({ ...formData, category: 'Assignment' });
          } else if (segment.intent.intent === 'add_exam') {
            setFormData({ ...formData, category: 'Exam' });
          }else if (segment.intent.intent === 'add_pro') {
            setFormData({ ...formData, category: 'Project Submission' });
          }
        if (segment.isFinal && segment.intent.intent === 'create_event') {
            return createEvent();
        } else if (segment.isFinal && segment.intent.intent === 'cancel_event') {
            return setFormData(initialState);
        }

        segment.entities.forEach((s) => {
            const subject = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;
           

            switch (s.type) {
                case 'subject':
                    // program in meet chat
                    setFormData({ ...formData, subject});
                    break;
                case 'date':
                    setFormData({ ...formData, date: s.value });
                    break;
                default:
                    break;
            }
        });

        if (segment.isFinal && formData.category && formData.subject && formData.date) {
            createEvent();
        }
    }
     
      }, [segment]);

const selectedCategories = eventCategories;
const selectedSubjects = eventSubject;

return (
    <Grid container spacing={1}>
        <Snackbar open={open} setOpen={setOpen} />
        <Grid item xs={12} align="center">
            <Typography align="center" variant='subtitle2' gutterBottom>
            {segment ? (
        <div className="segment">
          {segment.words.map((w) => w.value).join(" ")}
        </div>
      ) : null}
               </Typography>
        </Grid>
        <Grid item xs={7} justify='center'>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={7} align="center">
            <FormControl fullWidth>
                <InputLabel>Subject</InputLabel>
                <Select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}>
            {selectedSubjects.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
            </FormControl>
        </Grid>
        <Grid item xs={7}>
            <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
            
      </Grid>
        <Button className={classes.button} variant='outlined' color="primary" fullWidth onClick={createEvent}>Add Event</Button>
    </Grid>
    
);
};

export default EForm;
