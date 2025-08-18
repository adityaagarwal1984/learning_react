
import {useState} from "react"  
export const Increment = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-pink-200 to-orange-200">
            <div className="text-4xl font-bold text-pink-600 mb-8 drop-shadow-lg">
                <p>Count: {count}</p>
            </div>
            <button
                className="px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 text-white text-3xl font-extrabold shadow-lg hover:scale-105 hover:from-pink-400 hover:to-yellow-400 transition-all duration-300 border-4 border-white outline-none focus:ring-4 focus:ring-pink-200"
                onClick={() => setCount(count + 1)}
            >
                🌞 Increment 🌞
            </button>
            <button
                className="px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 text-white text-3xl font-extrabold shadow-lg hover:scale-105 hover:from-pink-400 hover:to-yellow-400 transition-all duration-300 border-4 border-white outline-none focus:ring-4 focus:ring-pink-200"
                onClick={() => setCount(count - 1)}
            >
                🌞 Decrement 🌞
            </button>
        </div>
    );
}
