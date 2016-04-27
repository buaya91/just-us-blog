import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import BlogPost from '../src/blogpost/content/BlogPost'
import BlogPostList from '../src/blogpost/list/BlogPostList'

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

const posts = { 0: post, 3: post }
const drafts = { 0: postDraft }

storiesOf('BlogPost', module)
  .add('Single', () => (
    <BlogPost actions={{}} post={post} postDraft={postDraft} />
  ))
  .add('List', () => (
    <BlogPostList actions={{}} posts={posts} postDrafts={drafts} />
  ))
