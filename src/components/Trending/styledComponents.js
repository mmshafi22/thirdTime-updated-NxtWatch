import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingMainContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`

export const TrendingBgContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`

export const TrendingSidebarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  width: 200px;
`
export const TrendingVideosContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`
export const TrendingHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  background-color: ${props => (props.isDarkMode ? '#424242' : '#ebebeb')};
`

export const TrendHeaderText = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  color: ${props => (props.isDarkMode ? 'white' : '#1e293b')};
  padding-left: 20px;
`
export const TrendingIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#e2e8f0')};
`
export const TrendLoaderContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TrendFailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 10px;
`
export const TrendFailureImg = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 20px;
`
export const TrendFailureHeading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  margin: 0px;
  padding-bottom: 20px;
`
export const TrendFailureText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? ' #cbd5e1' : '#7e858e')};
  margin: 0px;
  padding-bottom: 20px;
`
export const TrendBtnRetry = styled.button`
  background-color: #4f46e5;
  border: 0;
  outline: none;
  cursor: pointer;
  width: 100px;
  height: 35px;
  border-radius: 6px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #ffffff;
`
export const TrendingVideos = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
  @media (min-width: 700px) {
    padding: 20px;
  }
  height: 100%;
`

export const TrendingVideoItem = styled.li`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
  }
  margin-bottom: 15px;
`

export const TrendingVideoThumbnailImg = styled.img`
  width: 100%;
  @media (min-width: 700px) {
    width: 50%;
    margin-right: 15px;
  }
  @media (max-width: 699px) {
    margin-bottom: 15px;
  }
`

export const TrendingLink = styled(Link)`
  text-decoration: none;
`
export const TrendThumbnailTitle = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? 'white' : '#1e293b')};
  margin: 0px;
  @media (min-width: 700px) {
    font-size: 25px;
  }
`

export const TrendThumbnailName = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #616e7c;
`

export const TrendThumbnailViewsAndTime = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #616e7c;
`
export const TrendingTextContainer = styled.div`
  padding-left: 15px;
`
