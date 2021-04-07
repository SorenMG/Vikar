import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import DefaultProps from '../constants/navigation';
import Detail from '../containers/Detail';
import Main from '../containers/Main';

const Index = (
  <Stack hideNavBar {...DefaultProps}>
    <Scene hideNavBar {...DefaultProps}>
      <Stack key="main" {...DefaultProps}>
        <Scene
          key="main"
          title="Jobopslag"
          component={Main}
          headerLayoutPreset="left"
          {...DefaultProps}
        />
      </Stack>
      <Stack key="detail">
        <Scene key="detail" hideNavBar title="Detail" component={Detail} />
      </Stack>
    </Scene>
  </Stack>
);

export default Index;
