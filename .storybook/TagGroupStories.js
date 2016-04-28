import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TagGroups from '../src/blogpost/tag/TagGroup'
import { tags } from './testProps'

storiesOf('TagGroups', module)
  .add('', () => (
    <TagGroups tags={tags} onTagClick={action('tag clicked')}/>
  ))
