import React from 'react';
import { Container, Content } from 'native-base';
import color from '../../constants/color';
import spacing from '../../constants/spacing';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';

const CustomContainer = ({ children, fixed, noPadding }) => (
  <Container
    style={{
      backgroundColor: color.backgroundColor,
      paddingHorizontal: noPadding || spacing.screenPadding,
    }}
  >
    {fixed && <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>}
    {fixed || <Content>{children}</Content>}
  </Container>
);

CustomContainer.propTypes = {
  fixed: PropTypes.bool,
  noPadding: PropTypes.bool,
};

CustomContainer.defaultProps = {
  fixed: false,
  noPadding: false,
};

export default CustomContainer;
