import React, { useEffect, useRef, useState } from 'react';
import { Container, Error, Loading } from './UI';
import { Button, Icon, Item, List, ListItem, Text, Thumbnail } from 'native-base';
import { errorMessages } from '../constants/messages';
import spacing from '../constants/spacing';
import { FlatList } from 'react-native-gesture-handler';
import Card from './Job/Card';
import Divider from './Job/Divider';
import Row from './Job/Row';
import PropTypes from 'prop-types';
import { Dimensions, Modal, TouchableOpacity, View, Animated } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { getInset } from 'react-native-safe-area-view';
import color from '../constants/color';

const JobPosting = ({ error, loading, listData }) => {
  if (error) {
    return <Error content={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  const renderChunk = (chunk) => {
    const item = chunk.item;

    const renderRow = (item) => (
      <Row
        onPress={() => {
          setmodalShow(true);
        }}
      />
    );
    const renderCard = (item) => (
      <Card
        onPress={() => {
          setmodalShow(true);
        }}
      />
    );

    return (
      <>
        <Divider title={item.title} />
        {item.type == 'row' && item.data.map(renderRow)}
        {item.type == 'col' && <FlatList horizontal data={item.data} renderItem={renderCard} />}
      </>
    );
  };

  const [modalShow, setmodalShow] = useState(false);

  return (
    <>
      <Container noPadding>
        <List
          style={{ paddingLeft: spacing.screenPadding }}
          dataArray={listData}
          renderItem={renderChunk}
        />
      </Container>
      <Popup visible={modalShow} onClose={() => setmodalShow(false)} />
    </>
  );
};

const Popup = ({ visible, onClose }) => {
  if (!visible) return null;

  const modalizeRef = React.useRef(null);

  const fadeAnim = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 280,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  React.useEffect(() => {
    modalizeRef.current.open();
  }, []);

  const onPress = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 280,
      useNativeDriver: true,
    }).start();
    modalizeRef.current.close();
  };

  return (
    <Modal visible={visible} transparent>
      <Animated.View
        style={{
          backgroundColor: color.backgroundColor,
          flex: 1,
          opacity: fadeAnim,
        }}
      >
        <Container fixed>
          <Header onPress={onPress} />
        </Container>
      </Animated.View>
      <Modalize
        modalStyle={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        modalTopOffset={getInset('top', false) + 20}
        handlePosition="inside"
        ref={modalizeRef}
        withOverlay={false}
        onClosed={onClose}
        onBackButtonPress={() => modalizeRef.current.close()}
        panGestureAnimatedValue={fadeAnim}
      >
        <View style={{ padding: 16, paddingTop: 52 }}>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                padding: 4,
                width: 70,
                height: 70,
                borderRadius: 15,
                backgroundColor: color.backgroundColor,
              }}
            >
              <Thumbnail
                square
                style={{
                  width: 62,
                  height: 62,
                  resizeMode: 'contain',
                }}
                source={{ uri: 'https://www.arla.dk/UI/img/arla-logo@2x.02d13ae2.png' }}
              />
            </View>
            <View style={{ paddingTop: 32 }}>
              <Text style={{ fontFamily: 'Gilroy', fontSize: 30 }}>Produktionsarbejder</Text>
            </View>
            <View style={{ paddingTop: 12 }}>
              <Text style={{ fontFamily: 'Gilroy', fontSize: 16, color: 'grey' }}>Timring, DK</Text>
            </View>
            <View
              style={{
                marginTop: 32,
                flexDirection: 'row',
              }}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    padding: 16,
                    backgroundColor: color.backgroundColor,
                    borderRadius: 15,
                    alignSelf: 'flex-end',
                  }}
                >
                  <Text style={{ fontFamily: 'Gilroy' }}>Part Time</Text>
                </View>
              </View>
              <View style={{ flex: 0.2 }} />
              <View style={{ flex: 1, padding: 16 }}>
                <Text style={{ fontSize: 20 }}>60dkk/t</Text>
              </View>
            </View>
          </View>
        </View>
      </Modalize>
    </Modal>
  );
};

const Header = (props) => (
  <View
    style={{
      height: 70,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name="arrow-back" type="Ionicons" />
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 18, fontFamily: 'Gilroy' }}>Job</Text>
    </View>
    <View style={{ flex: 1 }} />
  </View>
);

JobPosting.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  listData: PropTypes.array,
};

JobPosting.defaultProps = {
  error: null,
};

export default JobPosting;
