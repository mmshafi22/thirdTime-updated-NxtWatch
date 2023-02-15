import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
export const TrendThumbnailTitle = styled.p`
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
