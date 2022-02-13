import React from 'react';
import Tab from '@mui/material/Tab';
import { LinkTabProps } from '../../../interfaces/index';
import TabStyles from './TabStyles';

const CustomTab = (props: LinkTabProps) => {
  const styles = TabStyles();
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      className={styles.tab}
      sx={{ textTransform: 'capitalize' }}
      disableRipple={true}
      {...props}
    />
  );
};

export default CustomTab;
