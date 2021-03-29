import React from 'react';
import { Container, Error, Loading } from './UI';
import { List } from 'native-base';
import { errorMessages } from '../constants/messages';
import spacing from '../constants/spacing';
import { FlatList } from 'react-native-gesture-handler';
import Card from './Job/Card';
import Divider from './Job/Divider';
import Row from './Job/Row';

const JobPosting = ({ error, loading }) => {
  if (error) {
    return <Error content={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <List style={{ paddingLeft: spacing.screenPadding }}>
        <Divider title="Close to you" />
        <FlatList horizontal renderItem={() => <Card />} data={['', '', '', '', '']} />
        <Divider title="Recently added" />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </List>
    </Container>
  );
};

export default JobPosting;
