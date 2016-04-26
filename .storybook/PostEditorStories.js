import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import PostEditor from '../src/blogpost/editor/PostEditor'

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

storiesOf('PostEditor', module)
  .add('', () => (
    <PostEditor actions={{}} postDraft={postDraft} />
  ))
