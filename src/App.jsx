import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FlightSearchPage from './pages/flights/FlightSearchPage'
import FlightListPage from './pages/flights/FlightListPage'
import FlightDetailPage from './pages/flights/FlightDetailPage'
import MainLayout from './layouts/MainLayout'
import LoginPage from './pages/dashboard/LoginPage'
import RegisterPage from './pages/dashboard/RegisterPage'
import ForgotPasswordPage from './pages/dashboard/ForgetPasswordPage'
import HomePage from './pages/dashboard/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      }
    ] 
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "forget-password",
    element: <ForgotPasswordPage/>
  },
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