import React, { Component} from 'react';

export default class Alert extends Component {
    render() {
      return (
        <div className="alert alert-danger" role="alert">
          {this.props.error}
        </div>
      );
    }
  }