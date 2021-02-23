import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as Heart } from '@fortawesome/free-regular-svg-icons'
import { Container } from './styles'
import { FavouriteContext } from 'contexts/Favourites'

const Favourite = ({ movie }) => {
  const {
    addToFavourite,
    removeFavouriteMovie,
    ButtonLiked,
  } = React.useContext(FavouriteContext)

  const handleClick = (movie) => {
    if (!ButtonLiked(movie)) {
      addToFavourite(movie)
      setTimeout(() => {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0,
          behavior: 'smooth',
        })
      }, 100)
    } else {
      removeFavouriteMovie(movie)
    }
  }

  return (
    <>
      <Container onClick={() => handleClick(movie)}>
        {!ButtonLiked(movie) ? (
          <FontAwesomeIcon icon={Heart} />
        ) : (
          <FontAwesomeIcon icon={faHeart} />
        )}
      </Container>
    </>
  )
}

Favourite.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default Favourite
