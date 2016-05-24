import React, { Component, PropTypes } from 'react'



export default class DisqusThread extends Component {
  render() {
    const { pid } = this.props
    const url = 'just-us.xyz'
    window.disqus_config = function () {
      this.page.url = url
      this.page.identifier = pid
    }
    return (
      <div>
        <div id="disqus_thread"></div>
        <script src="http://just-usxyz.disqus.com/embed.js" data-timestamp={+new Date()}>
        </script>
      </div>
    )
  }
}
