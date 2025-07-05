import { useAuth } from "../auth/useAuth";

function Navbar() {
    const { user, login, logout } = useAuth();

    return (
        <nav style={{ padding: "1rem", background: "#eee" }}>
            <h3>Auth App</h3>
            {user ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={() => login("Michael")}>Login</button>
            )}
        </nav>
    );
}

export default Navbar;
