import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TopBar from '../src/topbar/TopBar'
import { actions } from './testProps'

storiesOf('TopBar', module)
  .add('Not logged', () => (
    <TopBar actions={actions} />
  ))
  .add('Logged', () => (
    <TopBar actions={actions} logged />
  ))
