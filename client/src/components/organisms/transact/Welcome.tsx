import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import { MainButton } from '../../atoms';
import styles from '../orgStyles/styles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Input } from '../../atoms';
import { TransactionsContext } from '../../../context/TransactionContext';
const Welcome = () => {
  const classes = styles();
  const theme = useTheme();
  let { connect, connectedAccount, formData, onChange, sendTransaction } =
    useContext(TransactionsContext);
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
          {!connectedAccount.length && (
            <MainButton
              color="primary"
              buttonName="Connect Wallet"
              variant="contained"
              disabled={false}
              className="btnsmall"
              style={{ width: !matches ? '100%' : '60%' }}
              onClick={connect}
            />
          )}
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
            <p>
              {connectedAccount.length &&
                `${connectedAccount
                  .split('')
                  .slice(0, 8)
                  .join('')}.....${connectedAccount
                  .split('')
                  .slice(-4)
                  .join('')}`}
            </p>
            <p>Ethereum</p>
          </div>
        </div>
        <Grid container className={classes.formContainer}>
          <Grid item xs={12} style={{ padding: 16 }}>
            <Input
              placeholder="Address To"
              name="addressTo"
              value={formData.addressTo}
              onChange={onChange}
            />
            <Input
              placeholder="Amount(ETH)"
              name="amount"
              value={formData.amount}
              onChange={onChange}
            />
            <Input
              placeholder="Keyword(Gif)"
              name="keyword"
              value={formData.keyword}
              onChange={onChange}
            />
            <Input
              placeholder="Enter Message"
              style={{ marginBottom: 10 }}
              name="message"
              value={formData.message}
              onChange={onChange}
            />
            <MainButton
              color="primary"
              buttonName="Send Now"
              variant="contained"
              disabled={false}
              className="btnsmall"
              style={{ width: !matches ? '100%' : '60%' }}
              onClick={sendTransaction}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Welcome;
