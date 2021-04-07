import React, { useEffect, useRef, useState } from 'react';
import { Container, Error, Loading } from './UI';
import { Button, Icon, List, ListItem, Text } from 'native-base';
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

    const renderRow = (item) => <Row />;
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

const FadeInView = (props) => {
  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
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
        modalTopOffset={getInset('top', false) + 20}
        handlePosition="inside"
        ref={modalizeRef}
        withOverlay={false}
        onClosed={onClose}
        onBackButtonPress={() => modalizeRef.current.close()}
        panGestureAnimatedValue={fadeAnim}
      ></Modalize>
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
