import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { getStyles } from '../utils/base';
import Radium from 'radium';

const paperStyle = {
  backgroundColor: 'rgba(240,240,240,0.75)',
  boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.2)',
  borderRadius: '0%',
  display: 'flex',
  flexDirection: 'column',
  align: 'center',
  padding: '1em',
  margin: '1em',
};

@Radium
export default class Paper extends Component {
  render() {
    const typefaceStyle = this.context.typeface || {};
    return (
      <div className={this.props.className} style={[paperStyle, /*getStyles.call(this),*/ this.props.style, typefaceStyle]}>
        {this.props.children}
      </div>
    );
  }
}

Paper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Paper.contextTypes = {
  styles: PropTypes.object,
  store: PropTypes.object,
  typeface: PropTypes.object
};
