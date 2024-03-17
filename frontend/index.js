
let API = "http://127.0.0.1:8000/api"

const GetUsers = () =>{
    try{
        let res = fetch(`${API}/users/`)
        .then(response => response.json())
        .then(data => console.log(data))
    }
    catch(error){
        console.log(error)
    }
}
GetUsers();



