import { makeStyles } from '@mui/styles';
export default makeStyles((theme: any) => ({
  mainContainer: {
    backgroundColor: '#0f0e13',
    backgroundImage: `
      radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%),
      radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%),
      radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
`,
    minHeight: '70vh',
    color: '#fff',
    paddingTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      minHeight: '80vh',
    },
  },
  title: {
    fontSize: '2.4rem !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.75rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem !important',
    },
  },
  subtitle: {
    fontSize: '0.9rem !important',
    marginBottom: '1rem !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem !important',
    },
  },
  ethDiv: {
    marginTop: '20px',
    marginBottom: '1rem',
    backgroundColor: '#a099ff',
    minWidth: '10rem',
    minHeight: '10rem',
    borderRadius: 10,
    backgroundImage: `
                   radial-gradient(at 83% 67%, rgb(152, 231, 156) 0, transparent 58%), 
                   radial-gradient(at 67% 20%, hsla(357,94%,71%,1) 0, transparent 59%), 
                   radial-gradient(at 88% 35%, hsla(222,81%,65%,1) 0, transparent 50%), 
                   radial-gradient(at 31% 91%, hsla(9,61%,61%,1) 0, transparent 52%), 
                   radial-gradient(at 27% 71%, hsla(336,91%,65%,1) 0, transparent 49%), 
                   radial-gradient(at 74% 89%, hsla(30,98%,65%,1) 0, transparent 51%), 
                   radial-gradient(at 53% 75%, hsla(174,94%,68%,1) 0, transparent 45%);
            `,
  },
  formContainer: {
      backgroundColor:'#292d4c',
      borderRadius:12
  },
}));
