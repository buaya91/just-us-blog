import React, { Component, PropTypes } from 'react'
import config from '../../config'
import BlogPostContent from '../../blogpost/content/BlogPostContent'
import { parseObj } from './StreamParseUtils'

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
    }
  }
  request() {
    const decoder = new TextDecoder()
    window.fetch(url, { method: 'get' })
      .then(response => {
        const reader = response.body.getReader()
        let partial = ''
        streamSideEffects(reader, r => {
          const { received } = this.state
          const parsedResult = parseObj(partial + decoder.decode(r.value, { stream: !r.done }))
          const updated = received.concat(parsedResult[0])
          partial = parsedResult[1]
          this.setState({ received: updated })
        })
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
            {JSON.stringify(r)}
          </div>)}
      </div>
    )
  }
}
