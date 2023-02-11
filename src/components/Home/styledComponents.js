import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`

export const HomeBgContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`

export const HomeVideosContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`

export const SideContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  width: 200px;
`

export const PrimeAd = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 200px;
  align-items: flex-start;
  justify-content: space-around;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`

export const PrimeLogo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`

export const PrimeText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: #231f20;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
`

export const PrimeBtn = styled.button`
  background-color: transparent;
  border: 1px solid #231f20;
  font-family: Roboto;
  font-size: 12px;
  color: #231f20;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
`

export const VideosContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 20px;
`

export const SearchContainer = styled.div`
    width: 100%;
    max-width: 400px;
    border: 1px solid ${props => (props.isDarkMode ? '#f9f9f9' : '#181818')};
    background-color: transparent:
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 15px; 
`

export const SearchInput = styled.input`
    background-color: transparent;
    height: 40px;
    width: 90%;
    border: none;
    padding: 10px;
    font-family: Roboto:
    font-size: 15px:
    font-weight: 500;
    color: ${props => (props.isDarkMode ? '#f9f9f9' : '#181818')};
    outline: none; 
`

export const SearchBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-left: 1px solid ${props => (props.isDarkMode ? '#f9f9f9' : '#181818')};
  width: 10%;
  height: 40px;
`

export const LoaderContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  overflow-y: auto;
`

export const FailureImg = styled.img`
  width: 100%;
  margin-top: 10px;
  max-width: 300px;
`

export const FailureHeading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  padding-bottom: 10px;
`

export const FailureText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? ' #cbd5e1' : '#7e858e')};
  padding-bottom: 10px;
`

export const BtnRetry = styled.button`
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
export const VideosListItems = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  list-style-type: none;
`
