import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'

import ChangeThemeContext from '../../context/ChangeThemeContext'
import SaveVideosContext from '../../context/SaveVideosContext'

import {
  VideoItemMainContainer,
  VideoItemBgContainer,
  VideoItemSidebarContainer,
  DetailFailureViewContainer,
  DetailFailureImg,
  DetailFailureHeading,
  DetailFailureText,
  DetailBtnRetry,
  DetailLoaderContainer,
  VideoDetailMainContainer,
  DetailPlayerContainer,
  DetailVideoHeading,
  DetailTextContainer,
  ViewAndTime,
  DetailLikeAndDislike,
  IconBtn,
  BtnText,
  BtnSaveText,
  ProfileTextContainer,
  ProfileVideoItemImg,
  ChannelTextHeading,
  ChannelText,
  ChannelDescription,
} from './styledComponents'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    like: false,
    dislike: false,
    videoDetails: {},
    apiStatus: apiStatusList.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusList.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const newData = {
        videoDetails: data.video_details,
      }
      const {videoDetails} = newData
      const formatData = {
        id: videoDetails.id,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: formatData,
        apiStatus: apiStatusList.success,
      })
    } else {
      this.setState({apiStatus: apiStatusList.failure})
    }
  }

  likeTheVideo = () => {
    this.setState({like: true, dislike: false})
  }

  dislikeTheVideo = () => {
    this.setState({dislike: true, like: false})
  }

  renderSuccessDetailView = () => {
    const {videoDetails, like, dislike} = this.state
    const {
      publishedAt,
      title,
      videoUrl,
      viewCount,
      channel,
      description,
      id,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')
    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }
    return (
      <ChangeThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <VideoDetailMainContainer>
              <DetailPlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </DetailPlayerContainer>
              <DetailVideoHeading isDarkMode={isDarkMode}>
                {title}
              </DetailVideoHeading>
              <DetailTextContainer>
                <ViewAndTime>
                  {viewCount} views . {postedAt} ago
                </ViewAndTime>
                <DetailLikeAndDislike>
                  <IconBtn type="button" onClick={this.likeTheVideo}>
                    <BiLike color={like ? '#3b82f6' : '#616e7c'} size={20} />
                    <BtnText color={like ? '#3b82f6' : '#616e7c'}>Like</BtnText>
                  </IconBtn>
                  <IconBtn type="button" onClick={this.dislikeTheVideo}>
                    <BiDislike
                      color={dislike ? '#3b82f6' : '#616e7c'}
                      size={20}
                    />
                    <BtnText color={dislike ? '#3b82f6' : '#616e7c'}>
                      Dislike
                    </BtnText>
                  </IconBtn>
                  <SaveVideosContext.Consumer>
                    {val => {
                      const {updateVideoList, savedVideosList} = val
                      const isPresent = savedVideosList.find(
                        each => each.id === id,
                      )
                      const text = isPresent !== undefined ? 'Saved' : 'Save'
                      return (
                        <IconBtn
                          type="button"
                          onClick={() => updateVideoList(videoDetails)}
                        >
                          <RiMenuAddLine
                            size={20}
                            color={
                              isPresent !== undefined ? '#3b82f6' : '#616e7c'
                            }
                          />
                          <BtnSaveText
                            color={
                              isPresent !== undefined ? '#3b82f6' : '#616e7c'
                            }
                          >
                            {text}
                          </BtnSaveText>
                        </IconBtn>
                      )
                    }}
                  </SaveVideosContext.Consumer>
                </DetailLikeAndDislike>
              </DetailTextContainer>
              <hr />
              <ProfileTextContainer>
                <ProfileVideoItemImg src={profileImageUrl} alt="channel logo" />
                <div>
                  <div>
                    <ChannelTextHeading isDarkMode={isDarkMode}>
                      {name}
                    </ChannelTextHeading>
                    <ChannelText>{subscriberCount} subscribers</ChannelText>
                  </div>
                  <ChannelDescription>{description}</ChannelDescription>
                </div>
              </ProfileTextContainer>
            </VideoDetailMainContainer>
          )
        }}
      </ChangeThemeContext.Consumer>
    )
  }

  renderDetailLoadingView = () => (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <DetailLoaderContainer
            className="loader-container"
            data-testid="loader"
          >
            <Loader
              type="ThreeDots"
              color={isDarkMode ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </DetailLoaderContainer>
        )
      }}
    </ChangeThemeContext.Consumer>
  )

  renderDetailFailureView = () => (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const detailFailImg = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <DetailFailureViewContainer>
            <DetailFailureImg src={detailFailImg} alt="failure view" />
            <DetailFailureHeading isDarkMode={isDarkMode}>
              Oops? Something Went Wrong
            </DetailFailureHeading>
            <DetailFailureText isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again
            </DetailFailureText>
            <DetailBtnRetry
              type="button"
              onClick={() => this.getVideoDetails()}
            >
              Retry
            </DetailBtnRetry>
          </DetailFailureViewContainer>
        )
      }}
    </ChangeThemeContext.Consumer>
  )

  renderCustomDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderSuccessDetailView()
      case apiStatusList.failure:
        return this.renderDetailFailureView()
      case apiStatusList.inProgress:
        return this.renderDetailLoadingView()
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
            <VideoItemMainContainer isDarkMode={isDarkMode}>
              <Header />
              <VideoItemBgContainer>
                <VideoItemSidebarContainer>
                  <Sidebar />
                </VideoItemSidebarContainer>
                {this.renderCustomDetails()}
              </VideoItemBgContainer>
            </VideoItemMainContainer>
          )
        }}
      </ChangeThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
