import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import BlogPost from '../src/blogpost/content/BlogPostFull'
import BlogPostList from '../src/blogpost/list/BlogPostList'
import { post, postDraft, posts, drafts, actions } from './testProps'

storiesOf('BlogPostSummary', module)
  .add('Single', () => (
    <BlogPostFull actions={actions} post={post} postDraft={postDraft} />
  ))
  .add('List', () => (
    <BlogPostList actions={actions} posts={posts} postDrafts={drafts} />
  ))
