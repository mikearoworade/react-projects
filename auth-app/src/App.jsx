import { AuthProvider } from "./auth/AuthContext";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <Dashboard />
        </AuthProvider>
    );
}

export default App;
