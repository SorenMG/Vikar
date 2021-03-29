import React from 'react';
import { Container, Error, Loading } from './UI';
import { List, Text } from 'native-base';
import { errorMessages } from '../constants/messages';
import spacing from '../constants/spacing';
import { FlatList } from 'react-native-gesture-handler';
import Card from './Job/Card';
import Divider from './Job/Divider';
import Row from './Job/Row';
import PropTypes from 'prop-types';

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
    const renderCard = (item) => <Card />;

    return (
      <>
        <Divider title={item.title} />
        {item.type == 'row' && item.data.map(renderRow)}
        {item.type == 'col' && <FlatList horizontal data={item.data} renderItem={renderCard} />}
      </>
    );
  };

  return (
    <Container>
      <List
        style={{ paddingLeft: spacing.screenPadding }}
        dataArray={listData}
        renderItem={renderChunk}
      ></List>
    </Container>
  );
};

JobPosting.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  listData: PropTypes.array,
};

JobPosting.defaultProps = {
  error: null,
};

export default JobPosting;
