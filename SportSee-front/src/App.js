import { BrowserRouter } from 'react-router-dom'
import PublicRouter from './pages/PublicRouter'

const App = () => {
  return (
    <BrowserRouter>
      <PublicRouter />
    </BrowserRouter>
  )
}

export default App
