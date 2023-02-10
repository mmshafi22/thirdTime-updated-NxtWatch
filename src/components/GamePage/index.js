import {Component} from 'react'
import {IoLogoGameControllerB} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ChangeThemeContext from '../../context/ChangeThemeContext'
import CategoryContext from '../../context/CategoryContext'

import {
  GamingMainContainer,
  GamingBgContainer,
  GamingSidebarContainer,
  GameLoaderContainer,
  GameFailureViewContainer,
  GameFailureImg,
  GameFailureHeading,
  GameFailureText,
  GameBtnRetry,
  GameVideosContainer,
  GameHeader,
  GameIcon,
  GameHeaderText,
  GameVideosList,
  GameThumbnailCard,
  GameLink,
  GameThumbnailImg,
  GameThumbnailHeading,
  GameThumbnailText,
} from './styledComponents'

const gameStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class GamePage extends Component {
  state = {gamesList: [], gameStatus: gameStatusList.initial}

  componentDidMount() {
    this.getGameVideos()
  }

  getGameVideos = async () => {
    this.setState({gameStatus: gameStatusList.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const newData = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      this.setState({gamesList: newData, gameStatus: gameStatusList.success})
    } else {
      this.setState({gameStatus: gameStatusList.failure})
    }
  }

  renderGameVideos = () => {
    const {gamesList} = this.state
    return (
      <ChangeThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <GameVideosContainer>
              <GameHeader isDarkMode={isDarkMode}>
                <GameIcon isDarkMode={isDarkMode}>
                  <IoLogoGameControllerB size={40} color="red" />
                </GameIcon>
                <GameHeaderText isDarkMode={isDarkMode}>Gaming</GameHeaderText>
              </GameHeader>
              <GameVideosList>
                {gamesList.map(each => {
                  const {id, title, thumbnailUrl, viewCount} = each
                  return (
                    <CategoryContext.Consumer>
                      {val => {
                        const {changeCategory} = val
                        return (
                          <GameLink
                            to={`/videos/${id}`}
                            onClick={() => changeCategory('INITIAL')}
                          >
                            <GameThumbnailCard>
                              <GameThumbnailImg
                                src={thumbnailUrl}
                                alt="video thumbnail"
                              />
                              <GameThumbnailHeading isDarkMode={isDarkMode}>
                                {title}
                              </GameThumbnailHeading>
                              <GameThumbnailText>
                                {viewCount} Watching Worldwide
                              </GameThumbnailText>
                            </GameThumbnailCard>
                          </GameLink>
                        )
                      }}
                    </CategoryContext.Consumer>
                  )
                })}
              </GameVideosList>
            </GameVideosContainer>
          )
        }}
      </ChangeThemeContext.Consumer>
    )
  }

  renderGameFailureView = () => (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const GameFailImg = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <GameFailureViewContainer>
            <GameFailureImg src={GameFailImg} alt="failure view" />
            <GameFailureHeading isDarkMode={isDarkMode}>
              Oops? Something Went Wrong
            </GameFailureHeading>
            <GameFailureText isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again
            </GameFailureText>
            <GameBtnRetry type="button" onClick={() => this.getGameVideos()}>
              Retry
            </GameBtnRetry>
          </GameFailureViewContainer>
        )
      }}
    </ChangeThemeContext.Consumer>
  )

  renderGameLoadingView = () => (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <GameLoaderContainer
            className="loader-container"
            data-testid="loader"
          >
            <Loader
              type="ThreeDots"
              color={isDarkMode ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </GameLoaderContainer>
        )
      }}
    </ChangeThemeContext.Consumer>
  )

  renderCustomGamePage = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusList.success:
        return this.renderGameVideos()
      case gameStatusList.failure:
        return this.renderGameFailureView()
      case gameStatusList.inProgress:
        return this.renderGameLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ChangeThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <GamingMainContainer isDarkMode={isDarkMode}>
              <Header />
              <GamingBgContainer>
                <GamingSidebarContainer>
                  <Sidebar />
                </GamingSidebarContainer>
                {this.renderCustomGamePage()}
              </GamingBgContainer>
            </GamingMainContainer>
          )
        }}
      </ChangeThemeContext.Consumer>
    )
  }
}

export default GamePage
