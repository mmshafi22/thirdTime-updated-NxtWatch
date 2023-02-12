import Header from '../Header'
import Sidebar from '../Sidebar'

import ChangeThemeContext from '../../context/ChangeThemeContext'

import {
  NotFoundMainContainer,
  NotFoundBgContainer,
  NotFoundSidebarContainer,
  NotFoundViewContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ChangeThemeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const notFoundImg = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundMainContainer isDarkMode={isDarkMode}>
          <Header />
          <NotFoundBgContainer>
            <NotFoundSidebarContainer>
              <Sidebar />
            </NotFoundSidebarContainer>
            <NotFoundViewContainer>
              <NotFoundImg src={notFoundImg} alt="not found" />
              <NotFoundHeading isDarkMode={isDarkMode}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundText isDarkMode={isDarkMode}>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundViewContainer>
          </NotFoundBgContainer>
        </NotFoundMainContainer>
      )
    }}
  </ChangeThemeContext.Consumer>
)

export default NotFound
