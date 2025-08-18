
export const Eventclick = () => {
    function fun(){
                alert("i am a button")
            }
    return (
        <div>
             
            <button onClick={fun} className="px-12 py-2 m-10 bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 rounded-2xl">
                Click Me
            </button>
           

        </div>
    );
}