import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HomeItem = styled.li`
  width: 100%;
  @media (min-width: 900px) {
    width: 18%;
    margin-right: 15px;
  }
  margin-bottom: 15px;
  transition: 0.5s;
  :hover {
    box-shadow: 0px 0px 14px 2px
      ${props => (props.isDarkMode ? '#fefefe' : '#0f0f0f')};
    transform: scaleX(1);
    border-radius: 5px;
  }
`
export const HomeNavigate = styled(Link)`
  text-decoration: none;
`
export const HomeItemThumbnail = styled.img`
  width: 100%;
  margin-bottom: 10px;
`

export const ThumbnailDetails = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`
export const ThumbnailTitle = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  color: ${props => (props.isDarkMode ? 'white' : '#0f0f0f')};
  margin: 0px;
`

export const ThumbnailName = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #616e7c;
`

export const ThumbnailViewsAndTime = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #616e7c;
`
