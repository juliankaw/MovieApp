import { FavouriteMovie } from 'contexts/Favourites'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes/routes'
import GlobalStyle from 'styles/global'

function App() {
  return (
    <div className='App'>
      <>
        <FavouriteMovie>
          <BrowserRouter>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Routes />
            </div>
          </BrowserRouter>
        </FavouriteMovie>
        <GlobalStyle />
      </>
    </div>
  )
}

export default App
