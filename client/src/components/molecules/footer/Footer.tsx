import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import footerStyles from './FooterStyles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Logo } from '../../atoms';

// const imgUrl = new URL('/images/logo.png', import.meta.url).href

const FooterStyles = () => {
  const styles = footerStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container className={styles.footerContainer} alignItems="center">
      <Grid item container alignItems="center">
        <Grid item xs={!matches?3:12}>
          <Logo />
        </Grid>
        <Grid
          item
          container
          xs={!matches?9:12}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item>
            <Typography>Market</Typography>
          </Grid>
          <Grid item>
            <Typography>Tutorials</Typography>
          </Grid>
          <Grid item>
            <Typography>Exchange</Typography>
          </Grid>
          <Grid item>
            <Typography>Wallet</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center" style={{ padding: 20 }}>
        <Grid item>
          <Typography variant="body1" align="center">
            Come join us
          </Typography>
          <Typography variant="body2">info@kryptocurrency.com</Typography>
        </Grid>
      </Grid>
      <Divider style={{ backgroundColor: '#fff', height: 1, width: '100%' }} />
      <Grid item container justifyContent="space-between">
        <Grid item>
          <Typography variant="body2" style={{ marginTop: 10 }}>
            @customKrypto 2022
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" style={{ marginTop: 10 }}>
            All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterStyles;
