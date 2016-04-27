import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import LoginForm from '../src/login/LoginForm'

storiesOf('LoginForm', module)
  .add('', () => (
    <LoginForm />
  ))
