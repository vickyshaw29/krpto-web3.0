import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import { TransactionsContext } from '../../../context/TransactionContext';
import dummyData from '../../../utils/dummyData';
import TransactionCard from './helper/TransactionCard';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Styles from './styles';

const Transactions = () => {
  const styles = Styles();
  let { connectedAccount,transactions,loader } = useContext(TransactionsContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      className={styles.transactionContainer}
      justifyContent="center"
      alignItems="center"
    >
      <Typography>
        {connectedAccount ? (
          <h1>Latest Transactions</h1>
        ) : (
          <h1>Connect your wallet to see the latest transactions</h1>
        )}
      </Typography>
      <Grid item container style={{ padding: 10 }} spacing={2}>
        {transactions?.reverse().map((transaction, i) => (
          <Grid item xs={!matches?4:12}>
            <TransactionCard key={i} {...transaction} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Transactions;
