import React, { useRef } from 'react';
import { Container, Error, Loading } from './UI';
import { Button, Text, View } from 'native-base';
import { errorMessages } from '../constants/messages';
import PropTypes from 'prop-types';
import { Modalize } from 'react-native-modalize';

const JobDetail = ({ error, loading }) => {
  if (error) {
    return <Error content={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  const modalizeRef = useRef(null);

  return (
    <>
      <Container>
        <Button onPress={() => modalizeRef.current.open()}>
          <Text>Test</Text>
        </Button>
      </Container>
      <Modalize ref={modalizeRef} handlePosition="inside">
        <Text>Modal</Text>
      </Modalize>
    </>
  );
};

JobDetail.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
};

JobDetail.defaultProps = {
  error: null,
};

export default JobDetail;
