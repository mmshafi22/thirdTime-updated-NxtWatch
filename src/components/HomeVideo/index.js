import {formatDistanceToNow} from 'date-fns'

import {
  HomeNavigate,
  HomeItem,
  HomeItemThumbnail,
  ThumbnailDetails,
  ProfileImg,
  ThumbnailTitle,
  ThumbnailName,
  ThumbnailViewsAndTime,
} from './styledComponents'

import ChangeThemeContext from '../../context/ChangeThemeContext'
import CategoryContext from '../../context/CategoryContext'

const HomeVideo = props => {
  const {details} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = details
  const {name, profileImageUrl} = channel

  let postedTime = formatDistanceToNow(new Date(publishedAt))

  const postedAt = postedTime.split(' ')

  if (postedAt.length === 3) {
    postedAt.shift()
    postedTime = postedAt.join(' ')
  }

  const VideoItem = value => {
    const {isDarkMode} = value
    return (
      <CategoryContext.Consumer>
        {val => {
          const {changeCategory} = val
          return (
            <HomeItem>
              <HomeNavigate
                to={`/videos/${id}`}
                onClick={() => changeCategory('INITIAL')}
              >
                <HomeItemThumbnail src={thumbnailUrl} alt="video thumbnail" />
                <ThumbnailDetails>
                  <ProfileImg src={profileImageUrl} alt="channel logo" />
                  <div>
                    <ThumbnailTitle isDarkMode={isDarkMode}>
                      {title}
                    </ThumbnailTitle>
                    <ThumbnailName isDarkMode={isDarkMode}>
                      {name}
                    </ThumbnailName>
                    <ThumbnailViewsAndTime>
                      {viewCount} views . {postedAt} ago
                    </ThumbnailViewsAndTime>
                  </div>
                </ThumbnailDetails>
              </HomeNavigate>
            </HomeItem>
          )
        }}
      </CategoryContext.Consumer>
    )
  }

  return (
    <ChangeThemeContext.Consumer>
      {value => VideoItem(value)}
    </ChangeThemeContext.Consumer>
  )
}

export default HomeVideo
