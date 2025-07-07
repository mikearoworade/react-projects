import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/admin");
    };

    return <button onClick={handleLogin}>Login</button>;
}
