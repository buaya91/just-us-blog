import React from 'react'
import { action } from '@kadira/storybook'
import { Link } from 'react-router'

export const post = {
  pid: 1,
  author: 'Qing wei',
  title: 'First post',
  postAt: (new Date()).toDateString(),
  content: 'WIP...',
  tags: ['New stuff', 'to be continued'],
}
export const postDraft = {
  title: 'First post WIP',
  content: 'Editing...',
  tags: ['New stuff', 'to be continued'],
}

export const posts = { 0: post, 3: post, 2: post, 4: post, 8: post, 5: post, 7: post, }
export const drafts = { 0: postDraft }

export const tags = ['tg1', 'tg1', 'tg1', 'tg1',
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

export const searchTermsArr = ['s1', 's2', 's3']

export const links = [
  <Link className='link' to="/">Home</Link>,
  <Link className='link' to="aboutus">About Us</Link>,
]

export const actions = {
  updatePostEditDraft: () => action(),
}
