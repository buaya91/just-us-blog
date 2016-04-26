import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import BlogPost from '../src/blogpost/content/BlogPost'

const post = {
  pid: 1,
  author: 'Qing wei',
  title: 'First post',
  postAt: (new Date()).toDateString(),
  content: 'WIP...',
  tags: ['New stuff', 'to be continued'],
}

const postDraft = {
  title: 'First post WIP',
  content: 'Editing...',
  tags: ['New stuff', 'to be continued'],
}

storiesOf('BlogPost', module)
  .add('', () => (
    <BlogPost actions={{}} post={post} postDraft={postDraft} />
  ))