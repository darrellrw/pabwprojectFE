import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FlightSearchPage from './pages/flights/FlightSearchPage'
import FlightListPage from './pages/flights/FlightListPage'
import FlightDetailPage from './pages/flights/FlightDetailPage'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: "/flight",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <FlightSearchPage/>
      },
      {
        path: "find",
        element: <FlightListPage/>
      },
      {
        path: "detail",
        element: <FlightDetailPage/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App