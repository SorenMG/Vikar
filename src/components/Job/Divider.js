import React from 'react';
import { ListItem, Text } from 'native-base';
import spacing from '../../constants/spacing';

const Divider = ({ title }) => (
  <ListItem
    itemHeader
    first
    itemDivider
    style={{
      paddingBottom: spacing.interPadding,
      paddingTop: spacing.interPadding + 8,
      paddingLeft: 0,
      backgroundColor: 'transparent',
    }}
  >
    <Text style={{ fontFamily: 'Gilroy', fontSize: 17 }}>{title}</Text>
  </ListItem>
);

export default Divider;
