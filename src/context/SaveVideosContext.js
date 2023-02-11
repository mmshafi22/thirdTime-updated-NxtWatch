import React from 'react'

const SaveVideosContext = React.createContext({
  savedVideosList: [],
  save: false,
  addToSaveVideos: () => {},
  deleteFromSavedVideos: () => {},
  updateVideoList: () => {},
})

export default SaveVideosContext
