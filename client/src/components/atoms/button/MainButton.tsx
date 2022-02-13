import React from 'react';
import ButtonStyles from './ButtonStyles';
import {Button} from '@mui/material'

const MainButton = (p: any) => {
  const classes = ButtonStyles();
  return (
    <div className={classes.button}>
      <Button
        className={p.className}
        variant={p.variant}
        color={p.color}
        style={p.style}
        size={p.size}
        startIcon={p.startIcon}
        endIcon={p.endIcon}
        disabled={p.disabled}
        onClick={p.onClick}
      >
        {p.buttonName}
      </Button>
    </div>
  );
};

export default MainButton;
