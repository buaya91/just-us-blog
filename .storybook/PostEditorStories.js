import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import PostEditor from '../src/blogpost/editor/PostEditor'
import { postDraft, actions } from './testProps'

storiesOf('PostEditor', module)
  .add('', () => (
    <PostEditor actions={actions} postDraft={postDraft} />
  ))
