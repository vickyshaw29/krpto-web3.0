import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import useFetch from '../../../../hooks/useFetch';
import { shortenAddress } from '../../../../utils/commonUtils';
import Styles from './TransactionCardStyles';

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}: any) => {
  const styles = Styles();
  const gifUrl = useFetch({ keyword });
  return (
    <Grid container className={styles.cardContainer}>
      <Grid item xs={12}>
        <Typography>{`From: ${shortenAddress(addressFrom)}`}</Typography>
        <Typography>{`To: ${shortenAddress(addressTo)}`}</Typography>
        <Typography>{`Amount: ${amount}`}</Typography>
        <img src={url} className={styles.itemContainer} />
      </Grid>
    </Grid>
  );
};

export default TransactionCard;
