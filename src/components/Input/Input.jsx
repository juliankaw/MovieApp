import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputSearch, Container, Button } from './styles'

const Input = ({ id, placeholder, setValue, ...props }) => {
  return (
    <Container>
      <Button type='submit'>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
      <InputSearch
        type='text'
        id={id}
        placeholder={placeholder}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </Container>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default Input
