import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Routering
} from 'react-router-dom'

import Home from '../pages/home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Routering>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
      </Routering>
    </BrowserRouter>
  )
}

export default Routes
