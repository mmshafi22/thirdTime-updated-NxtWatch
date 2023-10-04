import ChangeThemeContext from '../../context/ChangeThemeContext'
import CategoryContext from '../../context/CategoryContext'

import {
  GameThumbnailCard,
  GameLink,
  GameThumbnailImg,
  GameThumbnailHeading,
  GameThumbnailText,
} from './styledComponents'

const GameCard = props => {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount} = details

  const thumbnail = theme => {
    const {isDarkMode} = theme
    return (
      <CategoryContext.Consumer>
        {val => {
          const {changeCategory} = val
          return (
            <GameLink
              to={`/videos/${id}`}
              onClick={() => changeCategory('INITIAL')}
            >
              <GameThumbnailCard key={id} isDarkMode={isDarkMode}>
                <GameThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
                <GameThumbnailHeading isDarkMode={isDarkMode}>
                  {title}
                </GameThumbnailHeading>
                <GameThumbnailText>
                  {viewCount} Watching Worldwide
                </GameThumbnailText>
              </GameThumbnailCard>
            </GameLink>
          )
        }}
      </CategoryContext.Consumer>
    )
  }
  return (
    <ChangeThemeContext.Consumer>
      {value => thumbnail(value)}
    </ChangeThemeContext.Consumer>
  )
}

export default GameCard
