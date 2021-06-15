import { makeStyles } from '@material-ui/core/styles';
import { blue, red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  assign: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));
