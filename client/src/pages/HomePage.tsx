import { Button } from '@mui/material';
import React from 'react';
import commonStyles from '../styles/commonStyles/styles';
import { Dashboard } from '../components/templates';

const HomePage = () => {
  const classes = commonStyles();
  return <Dashboard />;
};

export default HomePage;
