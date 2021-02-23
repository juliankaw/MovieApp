/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useLocalStorageState } from 'hooks/useLocalStorage'
import React from 'react'

export const FavouriteContext = React.createContext()

export const FavouriteMovie = ({ children }) => {
  const [favourite, setFavourite] = useLocalStorageState('favourites')

  const ButtonLiked = (item) => {
    let storedMovie =
      favourite && favourite.find((o) => o.imdbID === item.imdbID)
    const liked = storedMovie ? true : false
    return liked
  }

  const addToFavourite = (movie) => {
    let item =
      favourite && favourite.find((item) => item.imdbID === movie.imdbID)
    if (item) {
      return
    }
    const newFavourite = [...favourite, movie]
    setFavourite(newFavourite)
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourite.filter(
      (favourite) => favourite.imdbID !== movie.imdbID,
    )
    setFavourite(newFavouriteList)
  }

  return (
    <FavouriteContext.Provider
      value={{ favourite, addToFavourite, removeFavouriteMovie, ButtonLiked }}
    >
      {children}
    </FavouriteContext.Provider>
  )
}
