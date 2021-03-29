import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import DefaultProps from '../constants/navigation';
import Main from '../containers/Main';

const Index = (
  <Stack title="Jobopslag" {...DefaultProps.navbarProps}>
    <Scene key="main" hideNavBar component={Main} />
  </Stack>
);

export default Index;
