import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Main3 from "./pages/Main3";
import CreateAccount1 from "./pages/CreateAccount1";
import CatalogFilter1 from "./pages/CatalogFilter1";
import Catalog1 from "./pages/Catalog1";
import CreateAccount11 from "./pages/CreateAccount11";
import Article1 from "./pages/Article1";
import Product1 from "./pages/Product1";
import FrameComponent from "./pages/FrameComponent";
import Main from "./pages/Main";
import PopupMenu1 from "./pages/PopupMenu1";
import { useEffect } from "react";

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
      case "/create-account-11":
        title = "";
        metaDescription = "";
        break;
      case "/catalog-filter-1":
        title = "";
        metaDescription = "";
        break;
      case "/catalog-1":
        title = "";
        metaDescription = "";
        break;
      case "/create-account-1":
        title = "";
        metaDescription = "";
        break;
      case "/article-1":
        title = "";
        metaDescription = "";
        break;
      case "/product-1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3":
        title = "";
        metaDescription = "";
        break;
      case "/main":
        title = "";
        metaDescription = "";
        break;
      case "/popup-menu-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main3 />} />
      <Route path="/create-account-11" element={<CreateAccount1 />} />
      <Route path="/catalog-filter-1" element={<CatalogFilter1 />} />
      <Route path="/catalog-1" element={<Catalog1 />} />
      <Route path="/create-account-1" element={<CreateAccount11 />} />
      <Route path="/article-1" element={<Article1 />} />
      <Route path="/product-1" element={<Product1 />} />
      <Route path="/frame-3" element={<FrameComponent />} />
      <Route path="/main" element={<Main />} />
      <Route path="/popup-menu-1" element={<PopupMenu1 />} />
    </Routes>
  );
}
export default App;
