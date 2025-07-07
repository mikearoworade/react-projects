import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Navbar() {
    const { user, login, logout } = useAuth();

    return (
        <nav style={{ display: "flex", gap: "1rem", background: "#eee", padding: "1rem" }}>
            <Link to="/">Home</Link>
            {user && <Link to="/admin">Admin</Link>}
            {user ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </nav>
    );
}
