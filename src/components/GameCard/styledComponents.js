import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameThumbnailCard = styled.li`
  width: 300px;
  margin-right: 15px;
  margin-bottom: 15px;
`
export const GameThumbnailImg = styled.img`
  width: 100%;
  height: 200px;
  @media (min-width: 700px) {
    height: 300px;
  }
  padding-bottom: 10px;
`
export const GameThumbnailHeading = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? 'white' : '#1e293b')};
  padding-bottom: 10px;
`
export const GameThumbnailText = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: #616e7c;
`
export const GameLink = styled(Link)`
  text-decoration: none;
`
