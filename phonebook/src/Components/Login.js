import { useEffect, useState } from 'react';
import Api from '../ApiConfig';


const Login = ({setIsLoggedIn, setUser}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [res , setRes] = useState([]);

    


    const fetchData = async () => {
        try {
            const response = await fetch(`${Api}/Login/`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            const data = await response.json();
            setRes(data)  
            


            if (response.status === 200) {
                setIsLoggedIn(true);
                setUser(username);
            }
           

        } catch (error) {
            console.error("Error", error);
        }
    };

    const handleLogin = (event) => {

        event.preventDefault()
        fetchData();
   

    }




    return (
        <div className="container bg-black text-white xs:w-1/2 sm:w-2/3 lg:w-1/3 h-screen " >
            <div className="sticky">
                <div className="flex items-center px-6 mb-6 justify-center pt-8 pb-3">
                    <p className="text-2xl font-semibold">Contact Book</p>
                </div>

                <form className="flex flex-col items-center"  style={{ marginTop: "50%", marginBottom: "50%" }}>
                        <label className="mx-4 mb-1">Username</label>
                        <input className="w-1/2 mx-4 mb-4 p-1 rounded text-black"  value={username} onChange={e => setUsername(e.target.value)}></input>

                        <label className="mx-4 mb-1">Password</label>
                        <input className="w-1/2 mx-4 p-1 rounded text-black" value={password} onChange={e => setPassword(e.target.value)} ></input>

                        <p className='text-xs text-white mx-4 mt-4'>{res.error}</p>
                        <button className="bg-white text-black rounded p-1 mt-8" onClick={handleLogin}>Login</button>

                </form>

            </div>
        </div>

    );
}

export default Login;