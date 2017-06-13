import React from 'react';
import Paper from './paper.js'
import PropTypes from 'prop-types';

import {
  Heading,
  Image,
  Text,
  Layout,
  Fit,
  Fill,
  Table,
  TableRow,
  TableItem
} from 'spectacle';

const images = {
  happy: require('../assets/happy.svg'),
  problem: require('../assets/problem.svg'),
  disaster: require('../assets/disaster.svg')
};

const exampleStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '2%'
};

const imageStyle = {
  margin: '0px'
};

class AwesomeCard extends React.Component {
  render() {
    return (
      <Paper>
        <Heading size={6}>{this.props.question}</Heading>

        <Layout style={exampleStyle}>
          <Image src={images.happy} style={imageStyle} width='20%' height='20%' />
          <Text margin='20px auto' textSize='1.0em'>{this.props.awesome}</Text>
        </Layout>
        <Layout style={exampleStyle}>
          <Image src={images.disaster} style={imageStyle} width='20%' height='20%' />
          <Text margin='20px auto' textSize='1.0em'>{this.props.crappy}</Text>
        </Layout>

      </Paper>
    );
  }
}

AwesomeCard.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  question: PropTypes.string.isRequired,
  awesome: PropTypes.string.isRequired,
  crappy: PropTypes.string.isRequired,
};

export default AwesomeCard;