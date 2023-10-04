import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddLine} from 'react-icons/ri'

import ChangeThemeContext from '../../context/ChangeThemeContext'
import CategoryContext from '../../context/CategoryContext'
import SaveVideosContext from '../../context/SaveVideosContext'

import {
  CategoryListItems,
  CategoryItem,
  CategoryText,
  Navigate,
  SpanText,
} from './styledComponents'

const categoryConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  savedSection: 'SAVED_SECTION',
}

const CategoryList = () => {
  const categoryItems = value => {
    const {isDarkMode} = value

    return (
      <CategoryContext.Consumer>
        {categoryValue => {
          const {category, changeCategory} = categoryValue
          const unActiveColor = isDarkMode ? '#424242' : '#7e858e'
          const activeColor = '#ff0b37'
          return (
            <CategoryListItems>
              <Navigate to="/" className="link">
                <CategoryItem
                  isDarkMode={isDarkMode}
                  isActive={category === categoryConstants.home}
                  onClick={() => changeCategory(categoryConstants.home)}
                  key="HOME"
                >
                  <AiFillHome
                    size={20}
                    color={
                      category === categoryConstants.home
                        ? activeColor
                        : unActiveColor
                    }
                  />
                  <CategoryText isDarkMode={isDarkMode}>Home</CategoryText>
                </CategoryItem>
              </Navigate>
              <Navigate to="/trending" className="link">
                <CategoryItem
                  isDarkMode={isDarkMode}
                  isActive={category === categoryConstants.trending}
                  onClick={() => changeCategory(categoryConstants.trending)}
                  key="TRENDING"
                >
                  <AiFillFire
                    size={20}
                    color={
                      category === categoryConstants.trending
                        ? activeColor
                        : unActiveColor
                    }
                  />
                  <CategoryText isDarkMode={isDarkMode}>Trending</CategoryText>
                </CategoryItem>
              </Navigate>
              <Navigate to="/gaming" className="link">
                <CategoryItem
                  isDarkMode={isDarkMode}
                  isActive={category === categoryConstants.gaming}
                  onClick={() => changeCategory(categoryConstants.gaming)}
                  key="GAMING"
                >
                  <IoLogoGameControllerB
                    size={20}
                    color={
                      category === categoryConstants.gaming
                        ? activeColor
                        : unActiveColor
                    }
                  />
                  <CategoryText isDarkMode={isDarkMode}>Gaming</CategoryText>
                </CategoryItem>
              </Navigate>
              <Navigate to="/saved-videos" className="link">
                <CategoryItem
                  isDarkMode={isDarkMode}
                  isActive={category === categoryConstants.savedSection}
                  onClick={() => changeCategory(categoryConstants.savedSection)}
                  key="SAVED_SECTION"
                >
                  <RiMenuAddLine
                    size={20}
                    color={
                      category === categoryConstants.savedSection
                        ? activeColor
                        : unActiveColor
                    }
                  />
                  <SaveVideosContext.Consumer>
                    {val => {
                      const {savedVideosList} = val
                      return (
                        <CategoryText isDarkMode={isDarkMode}>
                          Saved videos{' '}
                          <SpanText>{savedVideosList.length}</SpanText>
                        </CategoryText>
                      )
                    }}
                  </SaveVideosContext.Consumer>
                </CategoryItem>
              </Navigate>
            </CategoryListItems>
          )
        }}
      </CategoryContext.Consumer>
    )
  }
  return (
    <ChangeThemeContext.Consumer>
      {value => categoryItems(value)}
    </ChangeThemeContext.Consumer>
  )
}

export default CategoryList
