import { makeStyles } from '@mui/styles';
export default makeStyles((theme: any) => ({
  tab: {
    minWidth: '10px !important',
    fontSize: '16px !important',
  },
  tabContainer: {
    '& .Mui-selected': {
      backgroundColor: 'none',
      color: '#fff !important',
    },
  },
}));
