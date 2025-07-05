import { useAuth } from "../auth/useAuth";

function Dashboard() {
    const { user } = useAuth();

    return (
        <div style={{ padding: "2rem" }}>
            {user ? (
                <h2>Welcome, {user.name}!</h2>
            ) : (
                <h2>Please log in to access your dashboard.</h2>
            )}
        </div>
    );
}

export default Dashboard;
