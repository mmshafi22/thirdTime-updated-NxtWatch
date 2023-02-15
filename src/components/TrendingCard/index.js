import {formatDistanceToNow} from 'date-fns'

import ChangeThemeContext from '../../context/ChangeThemeContext'
import CategoryContext from '../../context/CategoryContext'

import {
  TrendingVideoItem,
  TrendingVideoThumbnailImg,
  TrendThumbnailTitle,
  TrendThumbnailName,
  TrendThumbnailViewsAndTime,
  TrendingLink,
  TrendingTextContainer,
} from './styledComponents'

const TrendingCard = props => {
  const {details} = props
  const {id, publishedAt, channel, thumbnailUrl, title, viewCount} = details
  const {name} = channel
  let trendPostedTime = formatDistanceToNow(new Date(publishedAt))

  const trendPostedAt = trendPostedTime.split(' ')

  if (trendPostedAt.length === 3) {
    trendPostedAt.shift()
    trendPostedTime = trendPostedAt.join(' ')
  }
  const card = theme => {
    const {isDarkMode} = theme
    return (
      <CategoryContext.Consumer>
        {val => {
          const {changeCategory} = val
          return (
            <TrendingLink
              to={`/videos/${id}`}
              onClick={() => changeCategory('INITIAL')}
            >
              <TrendingVideoItem>
                <TrendingVideoThumbnailImg
                  src={thumbnailUrl}
                  alt="video thumbnail"
                />
                <TrendingTextContainer>
                  <TrendThumbnailTitle isDarkMode={isDarkMode}>
                    {title}
                  </TrendThumbnailTitle>
                  <TrendThumbnailName isDarkMode={isDarkMode}>
                    {name}
                  </TrendThumbnailName>
                  <TrendThumbnailViewsAndTime isDarkMode={isDarkMode}>
                    {viewCount} views
                  </TrendThumbnailViewsAndTime>
                  <TrendThumbnailViewsAndTime>
                    {trendPostedAt} ago
                  </TrendThumbnailViewsAndTime>
                </TrendingTextContainer>
              </TrendingVideoItem>
            </TrendingLink>
          )
        }}
      </CategoryContext.Consumer>
    )
  }
  return (
    <ChangeThemeContext.Consumer>
      {value => card(value)}
    </ChangeThemeContext.Consumer>
  )
}
export default TrendingCard
