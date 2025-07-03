import { useState } from "react";

function Header({ dark, toggleTheme }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: dark ? "#333" : "#eee",
    };

    const btnStyle = {
        cursor: "pointer",
        padding: "0.5rem 1rem",
        backgroundColor: dark ? "#555" : "#ddd",
        border: "none",
        borderRadius: "4px",
    };

    return (
        <>
            <header style={headerStyle}>
                <h1 className="text-xl font-bold">MySite</h1>

                {/* Desktop Nav */}
                <nav className="hidden sm:flex gap-4">
                    <a href="#hero">Home</a>
                    <a href="#features">Features</a>
                </nav>

                <div className="flex gap-2">
                    <button onClick={toggleTheme} style={btnStyle}>
                        {dark ? "Light" : "Dark"}
                    </button>

                    {/* Hamburger menu on mobile */}
                    <button
                        className="sm:hidden text-2xl"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        ☰
                    </button>
                </div>
            </header>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-2/3 max-w-xs h-full bg-gray-800 text-white p-4 sm:hidden
                transform ${sidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
                transition-all duration-300 ease-in-out`}
            >
                <button
                    className="text-right w-full"
                    onClick={() => setSidebarOpen(false)}
                >
                    ✕
                </button>
                <nav className="flex flex-col gap-4 mt-4">
                    <a href="#hero" onClick={() => setSidebarOpen(false)}>Home</a>
                    <a href="#features" onClick={() => setSidebarOpen(false)}>Features</a>
                </nav>
            </div>
        </>
    );
}

export default Header;
