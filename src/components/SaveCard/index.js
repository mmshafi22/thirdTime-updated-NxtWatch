import {formatDistanceToNow} from 'date-fns'

import ChangeThemeContext from '../../context/ChangeThemeContext'

import {
  SavePageVideoItem,
  SavePageVideoThumbnailImg,
  SavePageThumbnailTitle,
  SavePageThumbnailName,
  SavePageThumbnailViewsAndTime,
  SavePageTextContainer,
} from './styledComponents'

const SaveCard = props => {
  const {details} = props
  const {publishedAt, channel, thumbnailUrl, title, viewCount} = details
  const {name} = channel
  let savePagePostedTime = formatDistanceToNow(new Date(publishedAt))

  const savePagePostedAt = savePagePostedTime.split(' ')

  if (savePagePostedAt.length === 3) {
    savePagePostedAt.shift()
    savePagePostedTime = savePagePostedAt.join(' ')
  }
  return (
    <ChangeThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <SavePageVideoItem>
            <SavePageVideoThumbnailImg
              src={thumbnailUrl}
              alt="video thumbnail"
            />
            <SavePageTextContainer>
              <SavePageThumbnailTitle isDarkMode={isDarkMode}>
                {title}
              </SavePageThumbnailTitle>
              <SavePageThumbnailName isDarkMode={isDarkMode}>
                {name}
              </SavePageThumbnailName>
              <SavePageThumbnailViewsAndTime isDarkMode={isDarkMode}>
                {viewCount} views . {savePagePostedAt} ago
              </SavePageThumbnailViewsAndTime>
            </SavePageTextContainer>
          </SavePageVideoItem>
        )
      }}
    </ChangeThemeContext.Consumer>
  )
}
export default SaveCard
