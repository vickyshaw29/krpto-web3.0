import React from 'react';
import { Grid, Typography } from '@mui/material';
import { MainButton } from '../../atoms';
import styles from '../orgStyles/styles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Input } from '../../atoms';

const Welcome = () => {
  const classes = styles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
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
            style={{ width: !matches ? '100%' : '60%' }}
            // onClick={Reset}
          />
        </Typography>
      </Grid>
      <Grid item xs={!matches ? 3 : 8}>
        <div className={classes.ethDiv}>
          <Grid
            container
            justifyContent="space-between"
            style={{ padding: 10, marginBottom: '14%' }}
          >
            <Grid item>
              <SiEthereum
                fontSize={21}
                color="#fff"
                style={{
                  border: '1px solid #fff',
                  borderRadius: 20,
                  padding: 5,
                }}
              />
            </Grid>
            <Grid item>
              <BsInfoCircle fontSize={17} color="#fff" />
            </Grid>
          </Grid>
          <div style={{ padding: 10 }}>
            <p>xo8787......he3jhj</p>
            <p>Ethereum</p>
          </div>
        </div>
        <Grid container className={classes.formContainer}>
          <Grid item xs={12} style={{ padding: 16 }}>
            <Input placeholder="Address To" />
            <Input placeholder="Amount(ETH)" />
            <Input placeholder="Keyword(Gif)" />
            <Input placeholder="Enter Message" style={{marginBottom:10}}/>
            <MainButton
              color="primary"
              buttonName="Send Now"
              variant="contained"
              disabled={false}
              className="btnsmall"
              style={{ width: !matches ? '100%' : '60%' }}
              // onClick={Reset}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Welcome;
