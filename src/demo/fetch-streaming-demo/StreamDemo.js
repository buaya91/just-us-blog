import React, { Component, PropTypes } from 'react'
import config from '../../config'
import { parsePartialTextToJson } from './StreamParseUtils'

const url = `${config.api}/demo/stream`

const streamSideEffects = (reader, sideEffect) =>
  reader.read().then(r => {
    if (!r.done) {
      sideEffect(r)
      streamSideEffects(reader, sideEffect)
    }
  })

export default class StreamDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      received: [],
      partial: '',
    }
    this.decoder = new TextDecoder()
  }

  streamJSON(read) {
    const { received, partial } = this.state
    const parsedResult = parsePartialTextToJson(partial + this.decoder.decode(read.value, { stream: !read.done }))
    const updated = received.concat(parsedResult[0])
    this.setState({ received: updated, partial: parsedResult[1] })
  }

  streamText(read) {
    const { received } = this.state
    const newValue = this.decoder.decode(read.value, { stream: !read.done })
    const updated = received.concat([newValue])
    this.setState({ received: updated })
  }

  request() {
    window.fetch(url, { method: 'get' })
      .then(response => {
        const reader = response.body.getReader()
        streamSideEffects(reader, this.streamText)
      })
  }

  render() {
    const { received } = this.state
    return (
      <div>
        <button onClick={::this.request}>Fetch</button>
        <button onClick={() => this.setState({ received: [] })}>Clear</button>
        {received.map(r =>
          <div key={r.pid} className="stream-item">
            {r}
          </div>)}
      </div>
    )
  }
}
