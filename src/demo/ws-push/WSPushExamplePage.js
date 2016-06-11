/**
 * Created by personal on 11/06/2016.
 */
import React, { Component, PropTypes } from 'react'

export default class WSPushExamplePage extends Component {
  static propTypes = {
    response: PropTypes.string,
  }

  componentDidMount() {
    const ws = new WebSocket("ws://")
  }

  render() {
    return (
      <div>
        <h4>Websocket Push example</h4>
        <canvas></canvas>
      </div>
    )
  }
}
