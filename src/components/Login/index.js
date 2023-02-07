import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ChangeThemeContext from '../../context/ChangeThemeContext'

import {
  LoginPageContainer,
  LoginCard,
  LoginPageLogo,
  InputContainer,
  LabelForInput,
  InputBox,
  CheckBox,
  CheckBoxLabel,
  CheckBoxInputContainer,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username === '' && password !== '') {
      this.setState({
        showError: true,
        errorMsg: 'Enter The Username',
      })
    } else if (password === '' && username !== '') {
      this.setState({
        showError: true,
        errorMsg: 'Enter The Password',
      })
    } else if (password === '' && username === '') {
      this.setState({
        showError: true,
        errorMsg: 'Enter Username and Password',
      })
    } else {
      const userDetails = {username, password}
      const url = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        this.submitSuccess(data.jwt_token)
      } else {
        this.submitFailure(data.error_msg)
      }
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onCheckTheBox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showPassword, showError, errorMsg} = this.state
    const inputType = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ChangeThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <LoginPageContainer isDarkMode={isDarkMode}>
              <LoginCard isDarkMode={isDarkMode}>
                {isDarkMode ? (
                  <LoginPageLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <LoginPageLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}
                <InputContainer>
                  <LabelForInput isDarkMode={isDarkMode} htmlFor="username">
                    USERNAME
                  </LabelForInput>
                  <InputBox
                    type="text"
                    value={username}
                    id="username"
                    placeholder="Username"
                    isDarkMode={isDarkMode}
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelForInput isDarkMode={isDarkMode} htmlFor="password">
                    PASSWORD
                  </LabelForInput>
                  <InputBox
                    type={inputType}
                    value={password}
                    id="password"
                    placeholder="Password"
                    isDarkMode={isDarkMode}
                    onChange={this.onChangePassword}
                  />
                </InputContainer>
                <CheckBoxInputContainer>
                  <CheckBox type="checkbox" onChange={this.onCheckTheBox} />
                  <CheckBoxLabel isDarkMode={isDarkMode}>
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxInputContainer>
                <LoginBtn type="submit" onClick={this.onSubmitForm}>
                  Login
                </LoginBtn>
                {showError && <ErrorMsg>* {errorMsg}</ErrorMsg>}
              </LoginCard>
            </LoginPageContainer>
          )
        }}
      </ChangeThemeContext.Consumer>
    )
  }
}

export default Login
