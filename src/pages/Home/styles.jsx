import styled from 'styled-components'
import { Layer } from 'components/MovieList/styles'

export const ContainerMovies = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 14px;
  flex: 1;
  min-height: 500px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 320px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`

export const ContainerEmptyMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 500px;
`
export const Movie = styled.div`
  position: relative;
  &:hover ${Layer} {
    opacity: 1;
  }
`

export const Error = styled.div`
  font-size: 26px;
`

export const Search = styled.div`
  font-size: 26px;
  margin-left: 5px;
`
