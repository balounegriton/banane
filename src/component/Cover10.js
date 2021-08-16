import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';


class Cover10 extends Component {

 

  render() {

    return (
      <ReactResizeDetector handleWidth handleHeight>
  {({ width, height }) => <div>{`${width}x${height}`}</div>}
</ReactResizeDetector>

    )
  }
}
export default Cover10;
