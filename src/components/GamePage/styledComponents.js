import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingBgContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`
export const GamingSidebarContainer = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
  width: 200px;
`
export const GameLoaderContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GameFailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 80vh;
`
export const GameFailureImg = styled.img`
  width: 100%;
  max-width: 300px;
  padding-bottom: 20px;
`
export const GameFailureHeading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  margin: 0px;
  padding-bottom: 20px;
`
export const GameFailureText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? ' #cbd5e1' : '#7e858e')};
  margin: 0px;
  padding-bottom: 20px;
`
export const GameBtnRetry = styled.button`
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
export const GameVideosContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`
export const GameHeader = styled.div`
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
export const GameIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#e2e8f0')};
`
export const GameHeaderText = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  color: ${props => (props.isDarkMode ? 'white' : '#1e293b')};
  padding-left: 20px;
`
export const GameVideosList = styled.ul`
  list-style-type: none;
  padding-left: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
