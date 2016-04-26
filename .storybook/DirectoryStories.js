import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Directory from '../src/directory/Directory'
import { Link } from 'react-router'

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

storiesOf('Directory', module)
  .add('', () => (
    <Directory tags={tags} links={links}/>
  ))

