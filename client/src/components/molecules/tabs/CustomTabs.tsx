import React, { useState } from 'react';
import { Box, Tabs } from '@mui/material';
import { CustomTab } from '../../atoms';
import TabStyles from '../../atoms/tab/TabStyles';

const CustomTabs = ({ value, onChange, arr }: any) => {
  const styles=TabStyles()
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={onChange}
        aria-label="nav tabs example"
        indicatorColor="none"
        className={styles.tabContainer}
      >
        {arr?.map((v: any) => {
          return <CustomTab label={v.label} href={v.href} />;
        })}
      </Tabs>
    </Box>
  );
};

export default CustomTabs;
