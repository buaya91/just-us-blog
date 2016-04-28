import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Directory from '../src/directory/Directory'
import { tags, searchTermsArr, links } from './testProps'

storiesOf('Directory', module)
  .add('', () => (
    <Directory tags={tags} links={links} searchTerms={searchTermsArr} />
  ))

