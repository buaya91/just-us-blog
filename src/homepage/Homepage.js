import React, { Component, PropTypes } from 'react'
import BlogPostContent from '../blogpost/content/BlogPostContent'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import Paper from 'material-ui/Paper'

const style = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    lineHeight: '3.5rem',
  },
  content: {
    flex: '1 1 20rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingBottom: '.5rem',
  },
}

export default class Homepage extends Component {
  render() {
    const { posts } = this.props
    return (
      <div style={style}>
        {
          posts.map(p => {
            const { title, author, postAt } = p;
            const subtitle = (
              <span>
                <div>Post at: {postAt}</div>
                <div>Author: {author}</div>
              </span>
            )
            return (
              <Paper style={style.content}>
                <Card>
                  <CardTitle
                    title={title}
                    subtitle={subtitle}
                    titleStyle={style.title}
                  />
                  <CardText>
                    <BlogPostContent {...p} />
                  </CardText>
                </Card>
              </Paper>
            )
          })
        }
      </div>
    )
  }
}

Homepage.propTypes = {
  posts: PropTypes.object.isRequired,
}
