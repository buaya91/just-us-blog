import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Homepage from '../src/homepage/Homepage'
import { Link } from 'react-router'

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

const tags = ['tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1',
  'tg1', 'tg1', 'tg1', 'tg1', 'tg1', 'tg1'
]

const links = [
  <Link className='link' to="/">Home</Link>,
  <Link className='link' to="aboutus">About Us</Link>,
]

storiesOf('Homepage', module)
  .add('', () => (
    <Homepage actions={{}} links={links} posts={posts} postDrafts={drafts} tags={tags} />
  ))
