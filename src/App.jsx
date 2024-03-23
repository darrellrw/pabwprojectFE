import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Main
import MainLayout from './layouts/MainLayout'
import LoginPage from './pages/main/LoginPage'
import RegisterPage from './pages/main/RegisterPage'
import ForgotPasswordPage from './pages/main/ForgetPasswordPage'
import HomePage from './pages/main/HomePage'
import TopUp from './pages/main/TopUp'

// Dashboard
import DashboardPage from './pages/dashboard/DashboardPage'
import DashboardLayout from './layouts/DashboardLayout'
import LogsPage from './pages/dashboard/LogsPage'
import UserPage from './pages/dashboard/UsersPage'

// Hotel
import ListHotel from './pages/hotel/ListHotel'
import DetailHotel from './pages/hotel/DetailHotel'
import PemesananKamar from './pages/hotel/PemesananKamar'

// Flight
import FlightSearchPage from './pages/flights/FlightSearchPage'
import FlightListPage from './pages/flights/FlightListPage'
import FlightDetailPage from './pages/flights/FlightDetailPage'
import AccountPage from './pages/main/AccountPage'
import FlightPage from './pages/dashboard/flight/FlightPage'
import AirportPage from './pages/dashboard/flight/AirportPage'

const router = createBrowserRouter([
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
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "topup",
        element:  <TopUp/>
      },
      {
        path: "profile",
        element: <AccountPage/>
      }
    ] 
  },
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        index: true,
        element: <DashboardPage/>
      },
      {
        path: "log",
        element: <LogsPage/>
      },
      {
        path: "users",
        element: <UserPage/>
      },
      {
        path: "flight",
        element: <FlightPage/>
      },
      {
        path: "airport",
        element: <AirportPage/>
      }
    ]
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
  },
  {
    path: "/hotel",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <ListHotel/>
      },
      {
        path: "detail",
        element: <DetailHotel/>
      },
      {
        path: "pemesanan",
        element: <PemesananKamar/>
      },
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