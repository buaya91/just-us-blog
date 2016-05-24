import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Disqus from '../src/blogpost/comment/DisqusThread'

storiesOf('Disqus', module)
  .add('Single', () => (
    <Disqus pid={0} />
  ))
