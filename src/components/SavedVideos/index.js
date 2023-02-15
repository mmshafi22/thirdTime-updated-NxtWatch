import {Component} from 'react'
import {RiMenuAddLine} from 'react-icons/ri'

import ChangeThemeContext from '../../context/ChangeThemeContext'
import SaveVideosContext from '../../context/SaveVideosContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import SaveCard from '../SaveCard'

import {
  SavePageMainContainer,
  SavePageBgContainer,
  SavePageSidebarContainer,
  SavePageVideosContainer,
  SavePageHeader,
  SavePageIcon,
  SavePageHeaderText,
  SavePageVideoList,
  SavePageFailureViewContainer,
  SavePageFailureImg,
  SavePageFailureHeading,
  SavePageFailureText,
} from './styledComponents'

class SavedVideos extends Component {
  renderSavePageFailureView = () => (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const savePageFailImg =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
        return (
          <SavePageFailureViewContainer>
            <SavePageFailureImg src={savePageFailImg} alt="no saved videos" />
            <SavePageFailureHeading isDarkMode={isDarkMode}>
              No saved videos found
            </SavePageFailureHeading>
            <SavePageFailureText isDarkMode={isDarkMode}>
              You can save your videos while watching them
            </SavePageFailureText>
          </SavePageFailureViewContainer>
        )
      }}
    </ChangeThemeContext.Consumer>
  )

  renderAllTheSavedVideos = () => (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <SavePageVideosContainer>
            <SavePageHeader isDarkMode={isDarkMode}>
              <SavePageIcon isDarkMode={isDarkMode}>
                <RiMenuAddLine size={40} color="red" />
              </SavePageIcon>
              <SavePageHeaderText isDarkMode={isDarkMode}>
                Saved Videos
              </SavePageHeaderText>
            </SavePageHeader>
            <SaveVideosContext.Consumer>
              {val => {
                const {savedVideosList} = val
                console.log(savedVideosList)
                return (
                  <SavePageVideoList>
                    {savedVideosList.map(each => (
                      <SaveCard key={each.id} details={each} />
                    ))}
                  </SavePageVideoList>
                )
              }}
            </SaveVideosContext.Consumer>
          </SavePageVideosContainer>
        )
      }}
    </ChangeThemeContext.Consumer>
  )

  checkTheVideos = () => (
    <SaveVideosContext.Consumer>
      {val => {
        const {savedVideosList} = val
        if (savedVideosList.length === 0) {
          return this.renderSavePageFailureView()
        }
        return this.renderAllTheSavedVideos()
      }}
    </SaveVideosContext.Consumer>
  )

  render() {
    return (
      <ChangeThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <SavePageMainContainer
              isDarkMode={isDarkMode}
              data-testid="savedVideos"
            >
              <Header />
              <SavePageBgContainer>
                <SavePageSidebarContainer>
                  <Sidebar />
                </SavePageSidebarContainer>
                {this.checkTheVideos()}
              </SavePageBgContainer>
            </SavePageMainContainer>
          )
        }}
      </ChangeThemeContext.Consumer>
    )
  }
}

export default SavedVideos
