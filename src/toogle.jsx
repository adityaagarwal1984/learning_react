import { useState } from "react";

export const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                className={`w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    isOn ? "bg-green-500" : "bg-red-500"
                }`}
                onClick={() => setIsOn((prev) => !prev)}
            >
                <div
                    className={`bg-white w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${
                        isOn ? "translate-x-10" : ""
                    }`}
                />
            </div>
            <span className="ml-4 text-2xl">{isOn ? "ON" : "OFF"}</span>
        </div>
    );
};