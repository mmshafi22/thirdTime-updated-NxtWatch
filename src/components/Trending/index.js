import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ChangeThemeContext from '../../context/ChangeThemeContext'
import CategoryContext from '../../context/CategoryContext'

import {
  TrendingMainContainer,
  TrendingBgContainer,
  TrendingSidebarContainer,
  TrendingVideosContainer,
  TrendingHeader,
  TrendingIcon,
  TrendLoaderContainer,
  TrendFailureViewContainer,
  TrendFailureImg,
  TrendFailureHeading,
  TrendFailureText,
  TrendBtnRetry,
  TrendingVideos,
  TrendingVideoItem,
  TrendingVideoThumbnailImg,
  TrendThumbnailTitle,
  TrendThumbnailName,
  TrendThumbnailViewsAndTime,
  TrendingLink,
  TrendHeaderText,
  TrendingTextContainer,
} from './styledComponents'

const statusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class Trending extends Component {
  state = {trendingList: [], status: statusList.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({status: statusList.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const newData = data.videos.map(item => ({
        id: item.id,
        channel: {
          name: item.channel.name,
          profileImageUrl: item.channel.profile_image_url,
        },
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      this.setState({trendingList: newData, status: statusList.success})
    } else {
      this.setState({status: statusList.failure})
    }
  }

  renderTrendingFailureView = () => (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const TrendFailImg = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <TrendFailureViewContainer>
            <TrendFailureImg src={TrendFailImg} alt="failure view" />
            <TrendFailureHeading isDarkMode={isDarkMode}>
              Oops? Something Went Wrong
            </TrendFailureHeading>
            <TrendFailureText isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again
            </TrendFailureText>
            <TrendBtnRetry
              type="button"
              onClick={() => this.getTrendingVideos()}
            >
              Retry
            </TrendBtnRetry>
          </TrendFailureViewContainer>
        )
      }}
    </ChangeThemeContext.Consumer>
  )

  renderTrendingVideos = () => {
    const {trendingList} = this.state
    return (
      <ChangeThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <TrendingVideosContainer>
              <TrendingHeader isDarkMode={isDarkMode}>
                <TrendingIcon isDarkMode={isDarkMode}>
                  <AiFillFire size={40} color="red" />
                </TrendingIcon>
                <TrendHeaderText isDarkMode={isDarkMode}>
                  Trending
                </TrendHeaderText>
              </TrendingHeader>
              <TrendingVideos>
                {trendingList.map(each => {
                  const {
                    id,
                    channel,
                    publishedAt,
                    thumbnailUrl,
                    title,
                    viewCount,
                  } = each
                  const {name} = channel
                  let TrendPostedTime = formatDistanceToNow(
                    new Date(publishedAt),
                  )

                  const TrendPostedAt = TrendPostedTime.split(' ')

                  if (TrendPostedAt.length === 3) {
                    TrendPostedAt.shift()
                    TrendPostedTime = TrendPostedAt.join(' ')
                  }
                  return (
                    <CategoryContext.Consumer>
                      {val => {
                        const {changeCategory} = val
                        return (
                          <TrendingLink
                            to={`/videos/${id}`}
                            onClick={() => changeCategory('INITIAL')}
                          >
                            <TrendingVideoItem key={id}>
                              <TrendingVideoThumbnailImg
                                src={thumbnailUrl}
                                alt="video thumbnail"
                              />
                              <TrendingTextContainer>
                                <TrendThumbnailTitle isDarkMode={isDarkMode}>
                                  {title}
                                </TrendThumbnailTitle>
                                <TrendThumbnailName isDarkMode={isDarkMode}>
                                  {name}
                                </TrendThumbnailName>
                                <TrendThumbnailViewsAndTime
                                  isDarkMode={isDarkMode}
                                >
                                  {viewCount} views . {TrendPostedAt} ago
                                </TrendThumbnailViewsAndTime>
                              </TrendingTextContainer>
                            </TrendingVideoItem>
                          </TrendingLink>
                        )
                      }}
                    </CategoryContext.Consumer>
                  )
                })}
              </TrendingVideos>
            </TrendingVideosContainer>
          )
        }}
      </ChangeThemeContext.Consumer>
    )
  }

  renderTrendingLoadingView = () => (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <TrendLoaderContainer
            className="loader-container"
            data-testid="loader"
          >
            <Loader
              type="ThreeDots"
              color={isDarkMode ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </TrendLoaderContainer>
        )
      }}
    </ChangeThemeContext.Consumer>
  )

  renderCustomPage = () => {
    const {status} = this.state
    switch (status) {
      case statusList.success:
        return this.renderTrendingVideos()
      case statusList.failure:
        return this.renderTrendingFailureView()
      case statusList.inProgress:
        return this.renderTrendingLoadingView()
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
            <TrendingMainContainer isDarkMode={isDarkMode}>
              <Header />
              <TrendingBgContainer>
                <TrendingSidebarContainer>
                  <Sidebar />
                </TrendingSidebarContainer>
                {this.renderCustomPage()}
              </TrendingBgContainer>
            </TrendingMainContainer>
          )
        }}
      </ChangeThemeContext.Consumer>
    )
  }
}

export default Trending
