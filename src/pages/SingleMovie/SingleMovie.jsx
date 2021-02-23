import React from 'react'
import { useParams } from 'react-router-dom'
import MovieDetails from 'components/MovieDetails/MovieDetails'
import useFetch from 'hooks/useFetch'
import Loading from 'components/Loading/Loading'
import { Container } from './styles'
import { ContainerEmptyMovie } from 'pages/Home/styles'

const SingleMovie = () => {
  const { data, error, loading, request } = useFetch('movie')
  const { id } = useParams()

  React.useEffect(() => {
    request(`http://www.omdbapi.com/?i=${id}&apikey=8ce8db98`)
  }, [id, request])

  return (
    <Container>
      {data && <MovieDetails details={data} />}

      {loading && (
        <ContainerEmptyMovie>
          <Loading />
        </ContainerEmptyMovie>
      )}

      {data && <div>{data.Error}</div>}

      {error ? (
        <div>
          <p>There was an error:</p>
          <p>{error.message}</p>
        </div>
      ) : null}
    </Container>
  )
}

export default SingleMovie
