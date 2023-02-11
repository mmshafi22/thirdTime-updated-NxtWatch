import styled from 'styled-components'

export const SavePageVideoItem = styled.li`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
  }
  margin-bottom: 15px;
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

export const SavePageThumbnailTitle = styled.h1`
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
