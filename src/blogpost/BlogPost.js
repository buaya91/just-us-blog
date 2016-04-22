import React, { Component, PropTypes } from 'react';

export default class BlogPost extends Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.allPostRequested()
  }

  render() {
    const { title, content } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    )
  }
}

BlogPost.propTypes = {
  actions: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
