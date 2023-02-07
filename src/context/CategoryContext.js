import React from 'react'

const CategoryContext = React.createContext({
  category: 'INITIAL',
  changeCategory: () => {},
})

export default CategoryContext
