import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  overdue: {
    borderBottom: '0px solid rgba( 255,0, 0, 0.5)',
  },
  completed: {
    borderBottom: '0px solid rgba(0, 255, 0, 0.5)',
  },
}));