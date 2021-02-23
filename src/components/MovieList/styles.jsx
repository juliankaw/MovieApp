import styled from 'styled-components'

export const Imagem = styled.img`
  border-radius: 2px;
`
export const Layer = styled.div`
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    height: 99%;
    width:100%;
    top: 0;
    right: 0px;
    opacity:0;
    transition: all .2s;
    &:hover ${Imagem}{
    transform: scale(1.5)
  }
  section{
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0;
    width: 100%;
    padding-bottom: 20px;
    padding-right: 10px;
    padding-left: 10px;
    a{
      text-decoration: none;
      span{
        font-size: 14px;
      }
    }
  }


  p{
    color: #fff;
  }

  span{
    color: #fff;
  }

`
