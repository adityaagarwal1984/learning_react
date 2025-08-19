import { useState, useEffect } from "react";

export const TodoApp = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [datetime, setDatetime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const formatDate = date.toLocaleDateString();
            const time = date.toLocaleTimeString();
            setDatetime(`${formatDate} ${time}`);
        }, 1000);

        // Parallax background effect
        const handleParallax = () => {
            const scrolled = window.scrollY;
            const bg = document.getElementById("parallax-bg");
            if (bg) {
                bg.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        };
        window.addEventListener("scroll", handleParallax);

        return () => {
            clearInterval(interval);
            window.removeEventListener("scroll", handleParallax);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        if (tasks.includes(inputValue)) {
            alert("Task already exists");
            return;
        }
        setInputValue("");
        setTasks((prev) => [...prev, inputValue]);
    };

    const handleDeleteTask = (index) => {
        setTasks((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 relative overflow-hidden">
            {/* Blurred scenic background */}
            <div
                id="parallax-bg"
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(16px) brightness(0.7)",
                }}
            />
            {/* Optional gradient overlay for extra effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/60 via-blue-500/40 to-purple-600/60" />
            <div className="bg-white/80 shadow-2xl rounded-3xl p-10 w-full max-w-md relative z-10">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6 text-center drop-shadow-lg">
                    To Do Application
                </h1>
                <div className="flex justify-center mb-4">
                    <p className="text-gray-700 font-semibold text-lg bg-white/60 px-4 py-2 rounded-full shadow">
                        {datetime}
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Add a task..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-1 px-4 py-2 rounded-l-full border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/80 text-gray-800"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-r-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold shadow hover:scale-105 transition-transform"
                    >
                        Add
                    </button>
                </form>
                <ul className="space-y-3">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between bg-white/70 rounded-xl px-4 py-3 shadow hover:bg-cyan-50 transition"
                        >
                            <span className="text-gray-800 font-medium">{task}</span>
                            <button
                                className="ml-4 px-3 py-1 rounded-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold shadow hover:scale-110 transition-transform"
                                onClick={() => handleDeleteTask(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                {tasks.length === 0 && (
                    <p className="text-center text-gray-400 mt-6">No tasks yet. Add your first one!</p>
                )}
            </div>
        </div>
    );
};
