import { makeStyles } from '@mui/styles';
export default makeStyles((theme: any) => ({
  cardContainer: {
    padding: '10px 20px',
    minHeight: '36vh',
    background: 'rgba(255, 255, 255, 0.05) !important',
    borderRadius: '16px !important',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: '#fff !important',
  },
  itemContainer: {
    width: '100%',
    maxHeight: '12rem !important',
    [theme.breakpoints.down("sm")]:{
        maxHeight:'auto',
        height: '100% !important', 
    }
  },
}));
