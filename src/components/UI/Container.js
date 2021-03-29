import React from 'react';
import { Container, Text, H3, Button, View, Content } from 'native-base';
import color from '../../constants/color';
import spacing from '../../constants/spacing';
import PropTypes from 'prop-types';

const CustomContainer = ({ children, fixed }) => (
  <Container
    style={{
      backgroundColor: color.backgroundColor,
    }}
  >
    {fixed && <View style={{ flex: 1 }}>{children}</View>}
    {fixed || <Content>{children}</Content>}
  </Container>
);

CustomContainer.propTypes = {
  fixed: PropTypes.bool,
};

CustomContainer.defaultProps = {
  fixed: false,
};

export default CustomContainer;
