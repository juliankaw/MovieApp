import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 530px;
`

export const Plot = styled.div`
  max-width: 400px;
  h4 {
    margin-bottom: 10px;
  }
`
export const Title = styled.h2`
  font-size: 40px;
  max-width: 600px;
  margin-bottom: 30px;
`
export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  span {
    display: block;
    background-color: orange;
    color: black;
    padding: 3px;
    border-radius: 2px;
    letter-spacing: 0.2px;
    font-weight: bold;
  }
  div:nth-child(2) {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    font-size: 14px;
    padding: 3px;
    border-radius: 2px;
    margin-right: 10px;
  }
`
export const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  div {
    max-width: 152px;
    margin-right: 30px;
    h4 {
      margin-bottom: 10px;
    }
  }
`

export const Image = styled.div`
  max-width: 100%;
  order: 2;
  img {
    width: 300px;
    height: auto;
    border-radius: 3px;
  }
`
export const Button = styled.section`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  padding: 2px;
  cursor: pointer;
  p {
    margin-left: 3px;
  }
`
