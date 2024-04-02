import React, { useState ,useEffect } from 'react';
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user , setUser] = useState();

  useEffect(() => {
    const savedLoginState = localStorage.getItem('isLoggedIn');
    const savedUser = localStorage.getItem('user');
    if (savedLoginState) {
      setIsLoggedIn(JSON.parse(savedLoginState));
    }
    if (savedUser) {
      setUser(savedUser);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    localStorage.setItem('user', user);
  }, [isLoggedIn,user]);

  const [isThemeToggled, setIsThemeToggled] = useState(true);

  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className={`App ${isThemeToggled ?"bg-black" :"bg-white" }`}  >
      {isLoggedIn ? <Home  user={user} setIsThemeToggled={setIsThemeToggled} isThemeToggled={isThemeToggled}/> : <Login onLogin={handleLogin} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>}
    </div>
  );
}

export default App;