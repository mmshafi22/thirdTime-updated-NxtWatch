import styled from 'styled-components'

export const SidebarContainer = styled.div`
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#f4f4f4')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 10px;
`
export const ContactHeading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? '#f4f4f4' : ' #475569')};
  padding-left: 10px;
`
export const ContactPara = styled.p`
    font-family: Roboto:
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${props => (props.isDarkMode ? '#f4f4f4' : ' #475569')};
    padding-left: 10px;
`

export const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-top: 15px;
  padding-left: 10px;
`

export const Logo = styled.img`
  margin-right: 15px;
  width: 30px;
  height: 30px;
`
