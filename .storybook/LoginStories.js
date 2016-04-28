import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import LoginForm from '../src/login/LoginForm'

storiesOf('Login', module)
  .add('form only', () => (
    <LoginForm />
  ))
