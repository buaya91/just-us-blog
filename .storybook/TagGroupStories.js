import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TagGroups from '../src/blogpost/tag/TagGroup'

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

storiesOf('TagGroups', module)
  .add('', () => (
    <TagGroups tags={tags} onTagClick={action('tag clicked')}/>
  ))
