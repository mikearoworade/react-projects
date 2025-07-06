import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
    return (
        <div>
            <h1>🛒 E-Commerce Cart (Redux Toolkit)</h1>
            <ProductList />
            <Cart />
        </div>
    );
}
