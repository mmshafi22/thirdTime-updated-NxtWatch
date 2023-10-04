import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navigate = styled(Link)`
  text-decoration: none;
`

export const CategoryListItems = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
`
export const CategoryItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 5px;
  max-width: 200px;
  text-decoration: none;
  background-color: ${props => {
    const {isDarkMode} = props
    const color = isDarkMode ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
  :hover {
    border-top: 1px solid
      ${props => (props.isDarkMode === false ? '#424242' : '#e2e8f0')};
    border-bottom: 1px solid
      ${props => (props.isDarkMode === false ? '#424242' : '#e2e8f0')};
  }
`
export const CategoryText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding-left: 15px;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
`
export const SpanText = styled.span`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  background-color: #0388fc;
  padding: 2px;
  border-radius: 5px;
`
