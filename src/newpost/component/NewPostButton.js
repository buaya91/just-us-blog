import React, { Component, PropTypes } from 'react';

export default class NewPostButton extends Component {
  render() {
    const { openNewPostEditor } = this.props
    return (
      <button onClick={openNewPostEditor}></button>
    )
  }
}

NewPostButton.propTypes = {
  openNewPostEditor: PropTypes.func,
}
