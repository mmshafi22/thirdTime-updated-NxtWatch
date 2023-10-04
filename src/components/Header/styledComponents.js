import styled from 'styled-components'

export const NavLogo = styled.img`
  width: 100px;
  @media (min-width: 900px) {
    width: 150px;
  }
`
export const NavSmallBgContainer = styled.nav`
  background-color: ${props => (props.isDarkMode ? '#212121' : '#f4f4f4')};
  width: 100%;
  position: sticky;
  box-shadow: 0px 0px 14px 1px
    ${props => (props.isDarkMode ? '#fefefe' : '#0f0f0f')};
  @media (min-width: 900px) {
    display: none;
  }
`

export const IconsLargeContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavbarSmallContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80px;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#f4f4f4')};
`

export const NavbarLargeBgContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80px;
  position: sticky;
  box-shadow: 0px 0px 14px 1px
    ${props => (props.isDarkMode ? '#fefefe' : '#0f0f0f')};
  background-color: ${props => (props.isDarkMode ? '#212121' : '#f4f4f4')};
  @media (max-width: 899px) {
    display: none;
  }
`

export const IconsContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const BtnIcon = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
`
export const ProfileLogo = styled.img`
  width: 25px;
  height: 25px;
`

export const MobilePopup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: black;
  width: 90vw;
  padding: 10px;
  margin: auto;
  box-shadow: 0px 0px 14px 1px
    ${props => (props.isDarkMode ? '#fefefe' : '#0f0f0f')};
  border-radius: 10px;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const MobileList = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const CloseBtn = styled(BtnIcon)`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`
export const LogoutPopup = styled.div`
  background-color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
  border-radius: 8px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 50%;
  }
`
export const BtnLogout = styled.button`
  height: 35px;
  width: 110px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#3b82f6')};
  border: 1px solid ${props => (props.isDarkMode ? '#f9f9f9' : '#3b82f6')};
`

export const Question = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const Button = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  width: 80px;
  height: 35px;
  margin: 5px;
  cursor: pointer;
  color: ${props => (props.outline ? '#3b82f6' : 'white')};
  border-radius: 5px;
  outline: none;
  border: 1px solid #3b82f6;
`
