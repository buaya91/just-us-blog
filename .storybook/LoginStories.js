import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import LoginForm from '../src/login/LoginForm'
import LoginPopUp from '../src/login/LoginPopUp'
import { actions } from './testProps'

storiesOf('Login', module)
  .add('form only', () => (
    <LoginForm />
  ))
  .add('with Popup', () => (
    <LoginPopUp actions={actions} show />
  ))
