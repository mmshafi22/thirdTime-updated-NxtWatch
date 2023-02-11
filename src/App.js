import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import ChangeThemeContext from './context/ChangeThemeContext'
import CategoryContext from './context/CategoryContext'
import SaveVideosContext from './context/SaveVideosContext'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import GamePage from './components/GamePage'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

import './App.css'

const menuItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedSection: 'SAVED_SECTION',
}

class App extends Component {
  state = {
    isDarkMode: false,
    save: false,
    category: menuItems.home,
    savedVideosList: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  changeCategory = mode => {
    this.setState({category: mode})
  }

  addToSavedVideos = videoDetails => {
    this.setState(prev => ({
      savedVideosList: [...prev.savedVideosList, videoDetails],
    }))
  }

  deleteFromSavedVideos = videoDetails => {
    const {savedVideosList} = this.state
    const updatedList = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({savedVideosList: updatedList})
  }

  updateTheList = videoDetails => {
    const {save} = this.state
    if (save) {
      this.addToSavedVideos(videoDetails)
    } else {
      this.deleteFromSavedVideos(videoDetails)
    }
  }

  updateVideoList = videoDetails => {
    const {savedVideosList} = this.state
    const isPresent = savedVideosList.find(each => each.id === videoDetails.id)
    const isTrue = isPresent === undefined
    this.setState({save: isTrue}, this.updateTheList(videoDetails))
  }

  render() {
    const {isDarkMode, category, save, savedVideosList} = this.state
    return (
      <ChangeThemeContext.Provider
        value={{isDarkMode, changeTheme: this.changeTheme}}
      >
        <SaveVideosContext.Provider
          value={{
            save,
            savedVideosList,
            updateVideoList: this.updateVideoList,
            addToSavedVideos: this.addToSavedVideos,
            deleteFromSavedVideos: this.deleteFromSavedVideos,
          }}
        >
          <CategoryContext.Provider
            value={{category, changeCategory: this.changeCategory}}
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={GamePage} />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
            </Switch>
          </CategoryContext.Provider>
        </SaveVideosContext.Provider>
      </ChangeThemeContext.Provider>
    )
  }
}

export default App
