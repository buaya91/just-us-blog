import React, { Component, PropTypes } from 'react'
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share'

const {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = ShareButtons

const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const LinkedinIcon = generateShareIcon('linkedin')

const style = {
  display: 'flex',
  flexDirection: 'row',
}

export default class SharePanel extends Component {
  render() {
    const { url, title } = this.props
    return (
      <div style={style}>
        <FacebookShareButton url={url} title={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    )
  }
}

SharePanel.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
