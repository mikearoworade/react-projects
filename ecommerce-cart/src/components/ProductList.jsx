import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

const products = [
    { id: 1, name: "Phone", price: 599 },
    { id: 2, name: "Laptop", price: 1299 },
];

export default function ProductList() {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Products</h2>
            {products.map(p => (
                <div key={p.id}>
                    {p.name} — ${p.price}
                    <button onClick={() => dispatch(addItem(p))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}
