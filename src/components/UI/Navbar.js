import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Right, Text } from 'native-base';
import color from '../../constants/color';
import spacing from '../../constants/spacing';

const CustomHeader = ({ title }) => (
  <Header
    style={{
      height: 90,
      paddingLeft: spacing.screenPadding,
      paddingRight: spacing.screenPadding,
      borderBottomWidth: 0,
      backgroundColor: color.backgroundColor,
    }}
  >
    <Left style={{ flex: 0.8 }}>
      <Text style={{ fontFamily: 'Gilroy', fontSize: 40 }}>{title}</Text>
    </Left>
    <Right style={{ flex: 0.2 }}></Right>
  </Header>
);

CustomHeader.propTypes = {
  title: PropTypes.string,
};

CustomHeader.defaultProps = {
  title: 'Missing title',
};

export default CustomHeader;
