import React from 'react';
import Styles from './styles';
import { Grid, Typography } from '@mui/material';
import Servicescard from './helper/ServicesCard';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Services = () => {
  const styles = Styles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm' ));
  return (
    <Grid container className={styles.serviceContainer}>
      <Grid
        item
        container
        xs={!matches?6:12}
        className={styles.subContainer}
        direction="column"
        alignItems="center"
      >
        <Grid item className={styles.textGradient}>
          <Typography color="white" variant="h4">
            Services that we
            <br />
            <Typography variant="h4">continue to improve</Typography>
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs>
        <Grid item xs={12}>
          <Servicescard
            title="Security Guaranted"
            subtitle="Security is guaranted. We always maintain privacy and maintaining the quality of the products."
            icon={<BsShieldFillCheck fontSize={22} />}
          />
        </Grid>
        <Grid item xs={12}>
          <Servicescard
            title="Best Exchange Rates"
            subtitle="Security is guaranted. We always maintain privacy and maintaining the quality of the products."
            icon={<BiSearchAlt fontSize={22} />}
          />
        </Grid>
        <Grid item xs={12}>
          <Servicescard
            title="Fastest Transaction"
            subtitle="Security is guaranted. We always maintain privacy and maintaining the quality of the products."
            icon={<RiHeart2Fill fontSize={22} />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
