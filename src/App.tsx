import React from 'react';
import { ThemeProvider, Typography, useTheme } from '@material-ui/core';

import { useStyles } from './App.styles';
import { db } from './api/firebase';

export const App = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  // TOD: remove!
  console.log('db:', db());

  return (
    <ThemeProvider theme={theme}>
      <Typography className={classes.container}>My React Typescript Material-UI Boilerplate</Typography>
    </ThemeProvider>
  );
};
