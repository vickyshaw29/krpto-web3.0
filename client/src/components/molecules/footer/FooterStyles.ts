import { makeStyles } from '@mui/styles';

export default makeStyles((theme: any) => ({
  footerContainer: {
    backgroundColor: '#0f0e13',
    backgroundImage: `
            radial-gradient(at 0% 100%, hsla(253,16%,7%,1) 0, transparent 53%), 
            radial-gradient(at 50% 150%, hsla(339,49%,30%,1) 0, transparent 50%);
        `,
    color:'#fff',
    padding:'50px 20px'
  },
  logoImg:{
      width:'10rem',
      [theme.breakpoints.down("sm")]:{
          width:'5rem'
      }
  }
}));
