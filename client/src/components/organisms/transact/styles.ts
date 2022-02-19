import { makeStyles } from '@mui/styles';
export default makeStyles((theme: any) => ({
  serviceContainer: {
    backgroundColor: '#0f0e13',
    backgroundImage: `
        radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
        radial-gradient(at 50% 100%, hsla(225,39%,25%,1) 0, transparent 50%);
        `,
  },
  transactionContainer: {
    backgroundColor: '#0f0e13',
    backgroundImage: `
    radial-gradient(at 0% 100%, hsla(253,16%,7%,1) 0, transparent 50%),
    radial-gradient(at 50% 0%, hsla(225,39%,25%,1) 0, transparent 50%)
    `,
    color:'#fff'
  },
  subContainer: {
    padding: '20px 12px',
  },
  textGradient: {
    backgroundColor: '#fff',
    backgroundImage: `
        radial-gradient(at 4% 36%, hsla(0,0%,100%,1) 0, transparent 53%), radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%);
      `,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}));
