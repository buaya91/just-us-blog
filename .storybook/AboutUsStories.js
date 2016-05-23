import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import AboutUS from '../src/side-menu/AboutUsCard'

storiesOf('About US', module)
  .add('', () => (
    <AboutUS />
  ))
