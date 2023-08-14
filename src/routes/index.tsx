import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Routering
} from 'react-router-dom'
import App from '../App'

const Routes = () => {
  return (
    <BrowserRouter>
      <Routering>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<App />} />
      </Routering>
    </BrowserRouter>
  )
}

export default Routes
