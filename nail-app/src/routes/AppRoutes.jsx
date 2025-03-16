import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import cartPage from "../pages/CartPage";
import PopularPage from "../pages/PopularPage";
import ProductList from "../components/ProductList";
import CartPage from "../pages/CartPage";



function AppRoutes(props) {
    return (
        <Routes>
            <Route index element = {<HomePage {...props} />} />
            {/* <Route path="/favorites" element={<Favorites />} />
            <Route path="/sale" element={<Sale />} /> */}
            <Route path="/productList" element={<ProductList/> } />
            <Route path="/popular" element={<PopularPage />} /> 
            <Route path="/CartPage" element={<CartPage  />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes