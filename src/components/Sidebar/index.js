import ChangeThemeContext from '../../context/ChangeThemeContext'

import CategoryList from '../CategoryList'

import {
  SidebarContainer,
  ContactHeading,
  LogosContainer,
  Logo,
  ContactPara,
} from './styledComponents'

const Sidebar = () => (
  <ChangeThemeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <SidebarContainer isDarkMode={isDarkMode}>
          <CategoryList />
          <div>
            <ContactHeading isDarkMode={isDarkMode}>CONTACT US</ContactHeading>
            <LogosContainer isDarkMode={isDarkMode}>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogosContainer>
            <ContactPara isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </ContactPara>
          </div>
        </SidebarContainer>
      )
    }}
  </ChangeThemeContext.Consumer>
)

export default Sidebar
