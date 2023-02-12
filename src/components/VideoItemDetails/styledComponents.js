import styled from 'styled-components'

export const VideoItemMainContainer = styled.div`
  height: 100%;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoItemBgContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  width: 100%;
  height: 100%;
`

export const VideoItemSidebarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  width: 200px;
`
export const DetailFailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 80vh;
`
export const DetailFailureImg = styled.img`
  width: 100%;
  max-width: 300px;
  padding-bottom: 20px;
`
export const DetailFailureHeading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  margin: 0px;
  padding-bottom: 20px;
`
export const DetailFailureText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? ' #cbd5e1' : '#7e858e')};
  margin: 0px;
  padding-bottom: 20px;
`
export const DetailBtnRetry = styled.button`
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
export const DetailLoaderContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const VideoDetailMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  overflow-y: auto;
`
export const DetailPlayerContainer = styled.div`
  height: 40%;
  @media screen and (min-width: 768px) {
    height: 70%;
  }
`
export const DetailVideoHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  margin: 0px;
  padding-top: 15px;
`
export const DetailTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const ViewAndTime = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: #616e7c;
  margin: 0px;
  padding-top: 15px;
`
export const DetailLikeAndDislike = styled.div`
  display: flex;
  align-items: center;
`
export const IconBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
`
export const BtnText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  padding-left: 10px;
  font-weight: bold;
  letter-spacing: 1px;
`
export const BtnSaveText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  padding-left: 10px;
  color: ${props => props.color};
  font-weight: bold;
  letter-spacing: 1px;
`

export const ProfileTextContainer = styled.div`
  display: flex;
`
export const ProfileVideoItemImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 15px;
`
export const ChannelTextHeading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-weight: bold;
  margin: 0px;
  padding-bottom: 10px;
`
export const ChannelText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: #616e7c;
  font-weight: bold;
  margin: 0px;
`
export const ChannelDescription = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: #616e7c;
  font-weight: bold;
  margin: 0px;
  padding-top: 20px;
`
