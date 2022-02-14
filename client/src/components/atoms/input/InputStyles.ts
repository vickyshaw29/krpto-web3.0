import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  input: {
    width: '100%',
    background: '#292d4c 0% 0% no-repeat padding-box',
    border: '1px solid #DFDFDF',
    borderRadius: '5px',
    padding: '0 15px',
    height: '40px',
    marginTop: 5,
    outline:'none',

    '&::before': {
      borderBottom: 'unset',
    },

    '& .MuiInput-underline::before': {
      borderBottom: 'unset',
    },
  },
}));
