import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import HomeVideo from '../HomeVideo'
import ChangeThemeContext from '../../context/ChangeThemeContext'

import {
  HomeBgContainer,
  SideContainer,
  HomeMainContainer,
  HomeVideosContainer,
  PrimeAd,
  CloseBtn,
  PrimeLogo,
  PrimeText,
  PrimeBtn,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchBtn,
  LoaderContainer,
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureText,
  BtnRetry,
  VideosListItems,
} from './styledComponents'

const loadingStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class Home extends Component {
  state = {
    isLoaded: loadingStatus.initial,
    prime: true,
    videosList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({isLoaded: loadingStatus.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: formattedData,
        isLoaded: loadingStatus.success,
      })
    } else {
      this.setState({isLoaded: loadingStatus.failure})
    }
  }

  onClickSearchBtn = () => {
    this.getAllVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  removeAd = () => {
    this.setState({prime: false})
  }

  renderNoVideosView = () => (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureViewContainer>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading isDarkMode={isDarkMode}>
              No Search results found
            </FailureHeading>
            <FailureText isDarkMode={isDarkMode}>
              Try different key words or remove search filter
            </FailureText>
            <BtnRetry type="button" onClick={() => this.getAllVideos()}>
              Retry
            </BtnRetry>
          </FailureViewContainer>
        )
      }}
    </ChangeThemeContext.Consumer>
  )

  renderVideos = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderNoVideosView()
    }
    return (
      <VideosListItems>
        {videosList.map(each => (
          <HomeVideo key={each.id} details={each} />
        ))}
      </VideosListItems>
    )
  }

  adPage = () => (
    <PrimeAd data-testid="banner">
      <CloseBtn type="button" onClick={this.removeAd} data-testid="close">
        <IoMdClose size={25} />
      </CloseBtn>
      <PrimeLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <PrimeText>Buy Nxt Watch Premium prepaid plans with UPI</PrimeText>
      <PrimeBtn type="button">GET IT NOW</PrimeBtn>
    </PrimeAd>
  )

  renderFailureView = () => (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const failImg = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer>
            <FailureImg src={failImg} alt="failure view" />
            <FailureHeading isDarkMode={isDarkMode}>
              Oops? Something Went Wrong
            </FailureHeading>
            <FailureText isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again
            </FailureText>
            <BtnRetry type="button" onClick={() => this.getAllVideos()}>
              Retry
            </BtnRetry>
          </FailureViewContainer>
        )
      }}
    </ChangeThemeContext.Consumer>
  )

  renderLoaderView = () => (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <LoaderContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkMode ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ChangeThemeContext.Consumer>
  )

  renderAllVideos = () => {
    const {isLoaded} = this.state
    switch (isLoaded) {
      case loadingStatus.success:
        return this.renderVideos()
      case loadingStatus.failure:
        return this.renderFailureView()
      case loadingStatus.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    const {prime, searchInput} = this.state
    return (
      <ChangeThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <HomeMainContainer isDarkMode={isDarkMode} data-testid="home">
              <Header />
              <HomeBgContainer>
                <SideContainer>
                  <Sidebar />
                </SideContainer>
                <HomeVideosContainer>
                  {prime && this.adPage()}
                  <VideosContainer>
                    <SearchContainer isDarkMode={isDarkMode}>
                      <SearchInput
                        type="search"
                        isDarkMode={isDarkMode}
                        placeholder="Search"
                        onChange={this.onChangeSearchInput}
                        value={searchInput}
                      />
                      <SearchBtn
                        type="button"
                        isDarkMode={isDarkMode}
                        data-testid="searchButton"
                        onClick={this.onClickSearchBtn}
                      >
                        <BsSearch
                          color={isDarkMode ? '#f9f9f9' : '#181818'}
                          size={20}
                        />
                      </SearchBtn>
                    </SearchContainer>
                    {this.renderAllVideos()}
                  </VideosContainer>
                </HomeVideosContainer>
              </HomeBgContainer>
            </HomeMainContainer>
          )
        }}
      </ChangeThemeContext.Consumer>
    )
  }
}
export default Home
