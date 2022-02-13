import React from 'react';
import { Grid, Typography } from '@mui/material';
import { MainButton } from '../../atoms';
import styles from '../orgStyles/styles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Welcome = () => {
  const classes = styles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      className={classes.mainContainer}
      justifyContent={!matches ? 'space-around' : 'center'}
    >
      <Grid item xs={matches ? 12 : undefined}>
        <Typography align={matches ? 'center' : undefined}>
          <div className={classes.title}>
            <span>
              Send Crypto <br /> Across The globe
            </span>
          </div>
        </Typography>
        <Typography align={matches ? 'center' : undefined}>
          <div className={classes.subtitle}>
            Explore the crypto world. Buy and sell <br /> cryptocurrencies
            easily on krypt
          </div>
        </Typography>
        <Typography align={matches ? 'center' : undefined}>
          <MainButton
            color="primary"
            buttonName="Connect Wallet"
            variant="contained"
            disabled={false}
            className="btnsmall"
            style={{width:!matches?'100%':'60%'}}
            // onClick={Reset}
          />
        </Typography>
      </Grid>
      <Grid item xs={!matches ? 3 : 8}>
        <div className={classes.ethDiv}></div>
      </Grid>
    </Grid>
  );
};

export default Welcome;
