import React, { Component, PropTypes } from 'react'
import ErrorMsg from '../common/component/ErrorMsg'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    const { login, loginError } = this.props
    const { username, password } = this.state
    return (
      <div className="form">
        <fieldset>
          <legend>Login Form</legend>
          <div>
            <label>Username: </label>
            <input type="text" value={username} onChange={e => this.setState({ username: e.target.value })} autoComplete />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" value={password} onChange={e => this.setState({ password: e.target.value })} />
          </div>
          <ErrorMsg>{loginError}</ErrorMsg>
        </fieldset>
        <button onClick={() => login(username, password)}>Login</button>
      </div>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func,
  loginError: PropTypes.string,
}
