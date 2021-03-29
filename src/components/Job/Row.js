import React from 'react';
import { ListItem, Thumbnail, View, Right, Icon, Text } from 'native-base';
import spacing from '../../constants/spacing';
import { color } from 'react-native-reanimated';

const Row = ({ first }) => (
  <ListItem
    itemDivider
    style={{
      backgroundColor: 'white',
      marginRight: spacing.screenPadding,
      borderRadius: 15,
      padding: 16,
      marginTop: first || 8,
    }}
  >
    <View
      style={{
        padding: 4,
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: color.backgroundColor,
      }}
    >
      <Thumbnail
        square
        style={{
          width: 42,
          height: 42,
          resizeMode: 'contain',
        }}
        source={{ uri: 'https://www.arla.dk/UI/img/arla-logo@2x.02d13ae2.png' }}
      />
    </View>
    <View style={{ paddingLeft: 16 }}>
      <Text style={{ fontFamily: 'Gilroy' }}>Arla</Text>
      <Text style={{ fontFamily: 'Gilroy', color: 'grey' }}>Produktionsarbejde</Text>
    </View>
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <Text>dkk 50/t</Text>
    </View>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
);

export default Row;
