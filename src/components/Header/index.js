import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'

import CategoryContext from '../../context/CategoryContext'
import ChangeThemeContext from '../../context/ChangeThemeContext'

import {NavbarSmallContainer,IconsContainer,NavLogo} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <ChangeThemeContext.Consumer>
        {value => {
          const {isDarkMode, changeTheme} = value
          const logo = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <NavbarSmallContainer isDarkMode={isDarkMode}>
              <CategoryContext.Consumer>
                {value => {
                  const {changeCategory} = value
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

              </IconsContainer>
            </NavbarSmallContainer>
          )
        }}
      </ChangeThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
