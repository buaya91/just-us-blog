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

const shareStyle = {
  display: 'flex',
  flexDirection: 'row',
}

export default class SharePanel extends Component {
  render() {
    const { url, title, style } = this.props
    return (
      <div style={Object.assign(style, shareStyle)}>
        <FacebookShareButton url={url} title={title}>
          <FacebookIcon size={style.size} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={style.size} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={style.size} round />
        </LinkedinShareButton>
      </div>
    )
  }
}

SharePanel.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
}

SharePanel.defaultProps = {
  style: {
    size: 32,
  },
}
