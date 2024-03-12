import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from './pages/Home.jsx'
import TopUp from "./pages/TopUp.jsx";
import ListHotel from "./pages/ListHotel.jsx";
import DetailHotel from "./pages/DetailHotel.jsx";
import PemesananKamar from "./pages/PemesananKamar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/top-up":
        title = "";
        metaDescription = "";
        break;
      case "/list-hotel":
        title = "";
        metaDescription = "";
        break;
      case "/detail-hotel":
        title = "";
        metaDescription = "";
        break;
      case "/pemesanan-kamar":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/top-up" element={<TopUp />} />
      <Route path="/list-hotel" element={<ListHotel />} />
      <Route path="/detail-hotel" element={<DetailHotel />} />
      <Route path="/pemesanan-kamar" element={<PemesananKamar />} />
    </Routes>
  );
}
export default App;
