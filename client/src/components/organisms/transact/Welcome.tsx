import React, { useContext } from 'react';
import { ButtonGroup, Grid, Typography } from '@mui/material';
import styles from '../orgStyles/styles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Input } from '../../atoms';
import { TransactionsContext } from '../../../context/TransactionContext';
import { MainButton } from '../../atoms';
import {shortenAddress} from '../../../utils/commonUtils'

const Welcome = () => {
  const classes = styles();
  const theme = useTheme();
  let { connect, connectedAccount, formData, onChange, sendTransaction } =
    useContext(TransactionsContext);
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  let buttonArray = [
    { name: 'Reliability' },
    { name: 'Security' },
    { name: 'Ethereum' },
    { name: 'Web3.0' },
    { name: 'Low fees' },
    { name: 'BlockChain' },
  ];
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
        {/* <Typography align="center">
          <ButtonGroup>
            <Grid item container style={{ border: '1px solid red' }}>
              {buttonArray?.map((b) => (
                <Grid item xs={6}>
                  <MainButton
                    buttonName={b?.name}
                    variant="outlined"
                    disabled={false}
                    className="btnsmall"
                    // onClick={() => props.setCopyServiceModal(false)}
                  />
                </Grid>
              ))}
            </Grid>
          </ButtonGroup>
        </Typography> */}
      </Grid>
      <Grid item xs={!matches ? 3 : 10}>
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
              {shortenAddress(connectedAccount)}
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
            <Typography align="center">
              <MainButton
                color="primary"
                buttonName="Send Now"
                variant="contained"
                disabled={false}
                className="btnsmall"
                style={{ width: !matches ? '100%' : '60%' }}
                onClick={sendTransaction}
              />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Welcome;
