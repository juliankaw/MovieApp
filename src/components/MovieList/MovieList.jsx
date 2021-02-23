import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Imagem, Layer } from './styles'
import Favourite from 'components/Favourite/Favourite'

const MovieList = ({ item }) => {
  return (
    <>
      <Imagem src={item.Poster} alt={item.Title} />
      <Layer>
        <Favourite movie={item} />
        <section>
          <Link style={{ paddingTop: '100px' }} to={`/movie/${item.imdbID}`}>
            <p>{item.Title}</p>
            <span>{item.Year}</span>
          </Link>
        </section>
      </Layer>
    </>
  )
}

MovieList.propTypes = {
  item: PropTypes.object.isRequired,
}

export default MovieList
