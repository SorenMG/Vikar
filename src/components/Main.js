import React from 'react';
import { Text, ListItem, List, View, Thumbnail, Icon } from 'native-base';
import { Container, Error, Loading } from './UI';
import { errorMessages } from '../constants/messages';
import color from '../constants/color';
import spacing from '../constants/spacing';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const JobPosting = ({ error, loading }) => {
  if (error) {
    return <Error content={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  const renderItem = () => {
    const width = 200;
    return (
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
          <Text style={{ fontFamily: 'GilroyLight', fontSize: 18 }}>50 DKK/t</Text>
        </View>
      </View>
    );
  };

  return (
    <Container>
      <List style={{ paddingLeft: spacing.screenPadding }}>
        <ListItem
          itemHeader
          first
          itemDivider
          style={{
            paddingBottom: spacing.interPadding,
            paddingTop: spacing.interPadding,
            paddingLeft: 0,
            backgroundColor: 'transparent',
          }}
        >
          <Text style={{ fontFamily: 'Gilroy', fontSize: 17 }}>Close to you</Text>
        </ListItem>
        <FlatList horizontal renderItem={renderItem} data={['', '']} />
      </List>
    </Container>
  );
};

export default JobPosting;
