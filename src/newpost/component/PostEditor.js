import React, { Component, PropTypes } from 'react';
import NavBarContainer from '../../container/navbar/HorizontalNavContainer'
import PopUp from '../../container/popup/PopUp'
import { markdown } from 'markdown'

export default class PostEditor extends Component {
  render() {
    const { postDraft } = this.props
    const inputView = <textarea value={postDraft}></textarea>
    const previewView = <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(postDraft) }}></div>
    const views = [
      { component: inputView, name: 'Edit' },
      { component: previewView, name: 'Preview' },
    ]
    return (
      <PopUp>
        <NavBarContainer
          id="editor"
          views={views}
        />
      </PopUp>
    )
  }
}

PostEditor.propTypes = {
  postDraft: PropTypes.string,
}

PostEditor.defaultProps = {
  postDraft: '',
}
