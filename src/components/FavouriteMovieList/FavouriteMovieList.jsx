import React from 'react'
import { FavouriteContext } from 'contexts/Favourites'
import MovieList from 'components/MovieList/MovieList'
import { Movie } from 'pages/Home/styles'
import { ContainerMovies } from 'pages/Home/styles'
import { Title } from './styles'

const FavouriteMovieList = () => {
  const { favourite } = React.useContext(FavouriteContext)

  return (
    <div>
      <Title>My Favourites</Title>
      <ContainerMovies style={{ minHeight: '0' }}>
        {favourite &&
          favourite.map((item, index) => (
            <div key={index}>
              <Movie key={index}>
                <MovieList item={item} />
              </Movie>
            </div>
          ))}
      </ContainerMovies>
    </div>
  )
}

export default FavouriteMovieList
