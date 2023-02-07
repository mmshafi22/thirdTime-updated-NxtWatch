import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  category: '',
  activeCategory: '',
  changeTheme: () => {},
  changeCategory: () => {},
})

export default NxtWatchContext
