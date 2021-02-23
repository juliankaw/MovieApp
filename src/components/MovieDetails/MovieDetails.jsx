import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Container, Plot, Title, Image, Rating, CastContainer } from './styles'
import { FavouriteContext } from 'contexts/Favourites'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as Heart } from '@fortawesome/free-regular-svg-icons'
import { Button } from './styles'

const MovieDetails = ({ details }) => {
  const {
    addToFavourite,
    removeFavouriteMovie,
    ButtonLiked,
  } = React.useContext(FavouriteContext)

  const handleClick = (movie) => {
    if (!ButtonLiked(movie)) {
      addToFavourite(movie)
    } else {
      removeFavouriteMovie(movie)
    }
  }

  return (
    <>
      <Link to='/'>
        <FontAwesomeIcon icon={faArrowLeft} color='gray' />
      </Link>
      <Container>
        <div>
          <div style={{ marginBottom: '10px' }}>
            <span>{details.Runtime} - </span>
            <span>{details.Year}</span>
          </div>
          <Title>{details.Title}</Title>
          <Rating>
            <span>imdbID</span>
            <div>{details.imdbRating}/10</div>
            <Button onClick={() => handleClick(details)}>
              {!ButtonLiked(details) ? (
                <>
                  <FontAwesomeIcon icon={Heart} />
                  <p>Add to Favourites</p>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faHeart} color='red' />
                  <p>Remove from Favourites</p>
                </>
              )}
            </Button>
          </Rating>
          <Plot>
            <h4>Plot</h4>
            <p>{details.Plot}</p>
          </Plot>
          <CastContainer>
            <div>
              <h4>Cast</h4>
              <p>{details.Actors}</p>
            </div>
            <div>
              <h4>Genre</h4>
              <p>{details.Genre}</p>
            </div>
            <div>
              <h4>Director</h4>
              <p>{details.Director}</p>
            </div>
          </CastContainer>
        </div>
        <Image>
          <img src={details.Poster} alt={details.Title} />
        </Image>
      </Container>
    </>
  )
}

MovieDetails.propTypes = {
  details: PropTypes.object.isRequired,
}

export default MovieDetails
