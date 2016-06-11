/**
 * Created by personal on 11/06/2016.
 */
import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const buttonStyle = {
  position: 'relative',
  left: '-200px',
  top: '30px',
}

export default class WSPushExamplePage extends Component {
  conn() {
    if (this.ws) {
      return
    }
    this.ws = new WebSocket(`wss://${window.location.host}/ws-push`)
    this.ws.onmessage = msg => {
      this.updateCanvas(msg.data)
    }
  }

  updateCanvas(text) {
    const canvas = this.refs.canvas
    const ctx = this.refs.canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = 'red'
    ctx.font = '20px Arial'
    ctx.textAlign = 'center'
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  }

  render() {
    return (
      <div>
        <h4>Websocket Push example</h4>
        <canvas style={{ border: '5px solid black' }} ref="canvas" width={300} height={200}></canvas>
        <RaisedButton label="Connect" primary onClick={::this.conn} style={buttonStyle} />
      </div>
    )
  }
}
