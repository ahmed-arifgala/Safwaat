import viteLogo from '/vite.svg'
import routes from './Routes/routes'
import './App.css'
import {
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
