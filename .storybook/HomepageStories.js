import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Homepage from '../src/homepage/Homepage'
import { actions, tags, posts, drafts, links} from './testProps'

storiesOf('Homepage', module)
  .add('', () => (
    <Homepage actions={actions} links={links} posts={posts} postDrafts={drafts} tags={tags} />
  ))
