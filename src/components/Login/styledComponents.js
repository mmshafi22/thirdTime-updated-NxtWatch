import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')}};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
`

export const LoginCard = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#ffffff')}};
  box-shadow: 0px 4px 16px 0px ${props =>
    props.isDarkMode ? '#0f0f0f' : '#bfbfbf'};
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
`
export const LoginPageLogo = styled.img`
  width: 50%;
  align-self: center;
  margin-bottom: 20px;
`
export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  padding: 5px;
`
export const LabelForInput = styled.label`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 8px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};
`

export const InputBox = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  padding: 15px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};
  border: 1px solid #e2e8f0;
`
export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`
export const CheckBoxLabel = styled.label`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
`
export const CheckBoxInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
`

export const ErrorMsg = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? '#ff0000' : '#ff0b37')};
`
export const LoginBtn = styled.button`
  border: 0;
  height: 40px;
  border-radius: 8px;
  outline: none;
  background-color: #4f46e5;
  font-family: Roboto;
  font-size: 12px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
`
