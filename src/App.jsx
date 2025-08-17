export const Greeting = () => {
  const age = 1
  return (
    <>
      <img src="avatar.png" alt="avatar" height="40%" width="40%" />
      <button>{age > 16 ? "Aditya agarwal" : "ayush Garg"}</button>
    </>
  );
};

export const App = () => {
  return (
    
    <div>
      <Greeting />
            
      
    </div>
  );
};

// export default App;