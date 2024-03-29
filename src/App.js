import {Component} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'

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
import NotFound from './components/NotFound'

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
    isDarkMode:
      localStorage.getItem('theme') !== null
        ? localStorage.getItem('theme')
        : false,
    save: false,
    category:
      localStorage.getItem('category') !== null
        ? localStorage.getItem('category')
        : menuItems.home,
    savedVideosList: [],
  }

  changeTheme = () => {
    const {isDarkMode} = this.state
    localStorage.setItem('theme', !isDarkMode)
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  changeCategory = mode => {
    localStorage.setItem('category', mode)
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

  updateVideoList = videoDetails => {
    const {savedVideosList} = this.state
    const obj = savedVideosList.find(each => each.id === videoDetails.id)
    if (obj === undefined) {
      this.addToSavedVideos(videoDetails)
    } else {
      this.deleteFromSavedVideos(videoDetails)
    }
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
              <Route path="/not-found" component={NotFound} />
              <Redirect to="not-found" />
            </Switch>
          </CategoryContext.Provider>
        </SaveVideosContext.Provider>
      </ChangeThemeContext.Provider>
    )
  }
}

export default App
