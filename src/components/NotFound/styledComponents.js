import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`

export const NotFoundBgContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`

export const NotFoundSidebarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  width: 200px;
`
export const NotFoundViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImg = styled.img`
  width: 100%;
  max-width: 350px;
  padding-top: 15px;
`
export const NotFoundHeading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0px;
  padding-top: 15px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
`
export const NotFoundText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  letter-spacing: 1px;
  margin: 0px;
  padding-top: 15px;
  color: ${props => (props.isDarkMode ? ' #cbd5e1' : '#7e858e')};
`
