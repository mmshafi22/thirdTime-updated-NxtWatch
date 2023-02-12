import {Component} from 'react'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import Cookies from 'js-cookie'

import CategoryList from '../CategoryList'
import CategoryContext from '../../context/CategoryContext'
import ChangeThemeContext from '../../context/ChangeThemeContext'

import {
  NavSmallBgContainer,
  NavbarSmallContainer,
  IconsContainer,
  IconsLargeContainer,
  NavLogo,
  BtnIcon,
  MobilePopup,
  MobileList,
  LogoutPopup,
  Question,
  Button,
  CloseBtn,
  NavbarLargeBgContainer,
  ProfileLogo,
  BtnLogout,
} from './styledComponents'

class Header extends Component {
  render() {
    const contentStyles = {
      height: '200px',
      width: '70%',
      minWidth: '250px',
    }
    return (
      <ChangeThemeContext.Consumer>
        {value => {
          const {isDarkMode, changeTheme} = value
          const logo = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const onClickLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }
          return (
            <>
              <NavSmallBgContainer isDarkMode={isDarkMode}>
                <NavbarSmallContainer isDarkMode={isDarkMode}>
                  <CategoryContext.Consumer>
                    {activeValue => {
                      const {changeCategory} = activeValue
                      return (
                        <Link to="/">
                          <NavLogo
                            src={logo}
                            alt="website logo"
                            onClick={() => changeCategory('HOME')}
                          />
                        </Link>
                      )
                    }}
                  </CategoryContext.Consumer>
                  <IconsContainer>
                    <BtnIcon
                      type="button"
                      onClick={() => changeTheme()}
                      data-testid="theme"
                    >
                      {isDarkMode ? (
                        <FiSun color="white" size={22} />
                      ) : (
                        <FaMoon size={22} />
                      )}
                    </BtnIcon>
                    <Popup
                      modal
                      trigger={
                        <BtnIcon type="button">
                          <GiHamburgerMenu
                            size={22}
                            color={isDarkMode ? 'White' : 'black'}
                          />
                        </BtnIcon>
                      }
                    >
                      {close => (
                        <MobilePopup isDarkMode={isDarkMode}>
                          <CloseBtn type="button" onClick={() => close()}>
                            <IoMdClose color={isDarkMode ? 'white' : 'black'} />
                          </CloseBtn>
                          <MobileList>
                            <CategoryList />
                          </MobileList>
                        </MobilePopup>
                      )}
                    </Popup>
                    <Popup
                      modal
                      trigger={
                        <BtnIcon type="button">
                          <FiLogOut
                            color={isDarkMode ? 'white' : 'black'}
                            size={22}
                          />
                        </BtnIcon>
                      }
                      contentStyle={contentStyles}
                    >
                      {close => (
                        <LogoutPopup isDarkMode={isDarkMode}>
                          <Question isDarkMode={isDarkMode}>
                            Are you sure you want to logout?
                          </Question>
                          <div>
                            <Button
                              type="button"
                              onClick={() => close()}
                              outline
                            >
                              Cancel
                            </Button>
                            <Button type="button" onClick={onClickLogout}>
                              Confirm
                            </Button>
                          </div>
                        </LogoutPopup>
                      )}
                    </Popup>
                  </IconsContainer>
                </NavbarSmallContainer>
              </NavSmallBgContainer>
              <NavbarLargeBgContainer isDarkMode={isDarkMode}>
                <CategoryContext.Consumer>
                  {val => {
                    const {changeCategory} = val
                    return (
                      <Link to="/">
                        <NavLogo
                          src={logo}
                          alt="website logo"
                          onClick={() => changeCategory('HOME')}
                        />
                      </Link>
                    )
                  }}
                </CategoryContext.Consumer>
                <IconsLargeContainer>
                  <BtnIcon
                    type="button"
                    onClick={() => changeTheme()}
                    data-testid="theme"
                  >
                    {isDarkMode ? (
                      <FiSun color="white" size={22} />
                    ) : (
                      <FaMoon size={22} />
                    )}
                  </BtnIcon>
                  <ProfileLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <Popup
                    modal
                    trigger={
                      <BtnLogout type="button" isDarkMode={isDarkMode}>
                        Logout
                      </BtnLogout>
                    }
                    contentStyle={contentStyles}
                  >
                    {close => (
                      <LogoutPopup isDarkMode={isDarkMode}>
                        <Question isDarkMode={isDarkMode}>
                          Are you sure you want to logout?
                        </Question>
                        <div>
                          <Button type="button" onClick={() => close()} outline>
                            Cancel
                          </Button>
                          <Button type="button" onClick={onClickLogout}>
                            Confirm
                          </Button>
                        </div>
                      </LogoutPopup>
                    )}
                  </Popup>
                </IconsLargeContainer>
              </NavbarLargeBgContainer>
            </>
          )
        }}
      </ChangeThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
