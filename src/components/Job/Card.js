import React from 'react';
import { View, Thumbnail, Text, Icon } from 'native-base';
import spacing from '../../constants/spacing';
import color from '../../constants/color';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = 200;
const Card = (item) => (
  <TouchableOpacity onPress={item.onPress}>
    <View
      style={{
        backgroundColor: 'white',
        width: width,
        height: width,
        marginRight: 16,
        borderRadius: 15,
        padding: spacing.interPadding,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 1 }}>
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
          </View>

          <View style={{ justifyContent: 'center' }}>
            <View
              style={{
                backgroundColor: color.backgroundColor,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
                borderRadius: 15,
                justifyContent: 'center',
              }}
            >
              <Icon
                name="clockcircleo"
                type="AntDesign"
                style={{
                  marginRight: 4,
                  fontSize: 20,
                }}
              />

              <Text
                style={{
                  borderRadius: 15,
                }}
              >
                2 dage
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: 'Gilroy', fontSize: 18, marginVertical: 8 }}>
          Produktionsarbejde
        </Text>
        <Text style={{ fontFamily: 'GilroyLight', fontSize: 18 }}>dkk 50/t</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Card;
