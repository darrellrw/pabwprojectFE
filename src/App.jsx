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
import DashboardAdmin from './pages/dashboard/DashboardAdminPage'
import DashboardLayout from './layouts/DashboardLayout'
import LogsPage from './pages/dashboard/LogsPage'
import UserPage from './pages/dashboard/UsersPage'

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
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        index: true,
        element: <DashboardAdmin/>
      },
      {
        path: "log",
        element: <LogsPage/>
      },
      {
        path: "users",
        element: <UserPage/>
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