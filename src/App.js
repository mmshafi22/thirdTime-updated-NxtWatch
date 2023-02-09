import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ChangeThemeContext from './context/ChangeThemeContext'
import CategoryContext from './context/CategoryContext'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

import './App.css'

const menuItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedSection: 'SAVED_SECTION',
}

class App extends Component {
  state = {isDarkMode: false, category: menuItems.home}

  changeTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  changeCategory = mode => {
    this.setState({category: mode})
  }

  render() {
    const {isDarkMode, category} = this.state
    return (
      <ChangeThemeContext.Provider
        value={{isDarkMode, changeTheme: this.changeTheme}}
      >
        <CategoryContext.Provider
          value={{category, changeCategory: this.changeCategory}}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
          </Switch>
        </CategoryContext.Provider>
      </ChangeThemeContext.Provider>
    )
  }
}

export default App
