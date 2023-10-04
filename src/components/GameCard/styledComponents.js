import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameThumbnailCard = styled.li`
  width: 150px;
  @media (min-width: 900px) {
    width: 170px;
  }
  margin-right: 15px;
  margin-bottom: 15px;
  :hover {
    box-shadow: 0px 0px 14px 2px
      ${props => (props.isDarkMode ? '#fefefe' : '#0f0f0f')};
    transform: scaleX(1);
    border-radius: 5px;
  }
  transition: 0.5s;
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
  margin: 0;
  padding: 10px;
`
export const GameThumbnailText = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: #616e7c;
  margin: 0;
  padding: 10px;
`
export const GameLink = styled(Link)`
  text-decoration: none;
`
