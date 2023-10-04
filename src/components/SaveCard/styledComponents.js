import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavePageLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
  }
  text-decoration: none;
`

export const SavePageVideoItem = styled.li`
  margin-bottom: 15px;
  max-width: 1000px;
  transition: 0.5s;
  :hover {
    box-shadow: 0px 0px 14px 2px
      ${props => (props.isDarkMode ? '#fefefe' : '#0f0f0f')};
    transform: scaleX(1);
    border-radius: 5px;
  }
`

export const SavePageVideoThumbnailImg = styled.img`
  width: 100%;
  height: 200px;
  @media (min-width: 700px) {
    width: 40%;
    margin-right: 15px;
  }
  @media (max-width: 699px) {
    margin-bottom: 15px;
  }
`

export const SavePageThumbnailTitle = styled.p`
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
export const SavePageThumbnailName = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #616e7c;
`

export const SavePageThumbnailViewsAndTime = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #616e7c;
`
export const SavePageTextContainer = styled.div`
  padding-left: 15px;
`
