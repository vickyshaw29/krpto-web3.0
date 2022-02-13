import { makeStyles } from '@mui/styles';
export default makeStyles((theme: any) => ({
  drawer: {
    width: 240,
    backgroundColor: `${theme.palette.primary.main}!important`,
    color: '#fff !important',
  },
  toolbarMarginDrawer: {
    marginBottom: '4.7em',
  },
  drawerText: {
    // fontFamily: 'Nunito',
    fontSize: '0.86rem',
    fontWeight: 500,
    textTransform: 'none',
    color: '#fff',
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));
