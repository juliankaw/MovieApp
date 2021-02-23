/* eslint-disable no-unused-vars */
import React from 'react'
import Input from 'components/Input/Input'
import { client } from 'services/HttpClient'
import MovieList from 'components/MovieList/MovieList'
import {
  ContainerMovies,
  Movie,
  ContainerEmptyMovie,
  Error,
  Search,
} from './styles'
import { useLocalStorageState } from 'hooks/useLocalStorage'
import useFetch from 'hooks/useFetch'
import { FavouriteContext } from 'contexts/Favourites'
import FavouriteMovieList from 'components/FavouriteMovieList/FavouriteMovieList'
import Loading from 'components/Loading/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const { data, error, loading, request } = useFetch('movies')
  const [query, setQuery] = React.useState('')
  const [queried, setQueried] = React.useState(false)
  const { favourite } = React.useContext(FavouriteContext)

  function handleSubmit(event) {
    event.preventDefault()
    setQueried(true)
    request(`http://www.omdbapi.com/?s=${query}&apikey=8ce8db98`)
  }

  const moviesArray = data && data.Search

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='Search'
          id='search'
          type='search'
          value={query}
          setValue={setQuery}
        />
      </form>

      {moviesArray ? (
        <ContainerMovies>
          {moviesArray &&
            data.Search.map((item, index) => (
              <Movie key={index}>
                <MovieList item={item} />
              </Movie>
            ))}
        </ContainerMovies>
      ) : (
        <ContainerEmptyMovie>
          {!data && !loading && (
            <>
              <FontAwesomeIcon icon={faSearch} size='2x' />
              <Search>Search for a movie!</Search>
            </>
          )}
          {loading ? <Loading /> : null}
          {/* Observação: Nesse map sei que é errado usar o index como Key mas a API não me fornece um ID único. */}
          {data && <Error>{data.Error}</Error>}
          {error && (
            <div>
              <p>There was an error:</p>
              <pre>{error.message}</pre>
            </div>
          )}
        </ContainerEmptyMovie>
      )}
      {favourite && <FavouriteMovieList movies={data} />}
    </>
  )
}

export default Home
