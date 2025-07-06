import { useSelector, useDispatch } from "react-redux";
import { removeItem, adjustQuantity } from "../features/cartSlice";

export default function Cart() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Cart</h2>
            {items.map(i => (
                <div key={i.id}>
                    {i.name} x {i.quantity} — ${i.price * i.quantity}
                    <button onClick={() => dispatch(removeItem(i.id))}>Remove</button>
                    <input
                        type="number"
                        value={i.quantity}
                        onChange={(e) => dispatch(adjustQuantity({ id: i.id, quantity: Number(e.target.value) }))}
                    />
                </div>
            ))}
        </div>
    );
}
