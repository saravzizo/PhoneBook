import { useState } from "react";
import Api from "../ApiConfig";


const CreateContacts = ({ user, handlePlusBack, isThemeToggled }) => {

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(handlePlusBack, 100);
    }


    let [name, setName] = useState("");
    const [contactNum, setContactNum] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [res, setRes] = useState([]);

    const handlePostContact = async () => {

        try {
            const response = await fetch(`${Api}/user/${user}/contacts/`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    "contact_name": name,
                    "contact_number": contactNum,
                    "country_code": countryCode
                }),

            });
            const data = await response.json();
            setRes(data)

            if (response.status === 200)
                window.location.reload();

        } catch (error) {
            console.error("Error", error);
        }
    }

    let placeholder = name.toUpperCase()


    return (
        <div className={`container ${isThemeToggled ? "bg-black text-white" : "bg-white text-black"} xs:w-1/2 sm:w-2/3 lg:w-1/3 h-screen ${isClosing ? "slide-out-to-bottom" : "slide-in-from-bottom"}`} >
            <div className="flex flex-row items-center justify-between px-6 pt-8 mb-6 ">
                <p className="font-semibold text-xl" onClick={handleClose}>Cancel</p>
                <p className="font-semibold text-lg" >New contact</p>
                <p className="font-semibold text-xl" onClick={handlePostContact}>Save</p>
            </div>



            <div className="flex flex-row items-center justify-center mb-6 pt-16" >
                <span className="bg-gray-200 rounded-full" style={{ height: "100px", width: "100px" }}>
                    <p className="flex flex-row justify-center items-center text-black font-bold text-5xl" style={{ transform: "translate(0%, 50%)" }}>{placeholder[0]}</p>
                </span>
            </div>

            <div className="flex flex-row justify-evenly pt-20 ">
                <div className="flex flex-col content-center">
                    <label className="p-2 py-5">Name</label>
                    <label className="p-2 py-5">Contact number</label>
                    <label className="p-2 py-5">Country code</label>
                </div>

                <div className="flex flex-col content-center items-start">
                    <input type="text" className={`${isThemeToggled ? "bg-black border-gray-200" : "bg-white border-gray-500"} border-b outline-0 m-4 mb-0`} placeholder="Name" value={name} onChange={e => setName(e.target.value)} ></input>
                    <p className="text-xs mx-4 mb-4 mt-1 text-yellow-500">{res.Name_Error}</p>
                    <input type="number" className={`${isThemeToggled ? "bg-black border-gray-200" : "bg-white border-gray-500"} border-b outline-0 m-4 mb-0`} placeholder="Contact number" value={contactNum} onChange={e => setContactNum(e.target.value)}></input>
                    <p className="text-xs mx-4 mb-4 mt-1 text-yellow-500">{res.Number_Error}</p>
                    <input type="number" className={`${isThemeToggled ? "bg-black border-gray-200" : "bg-white border-gray-500"} border-b outline-0 m-4 mb-0`} placeholder="Country code" value={countryCode} onChange={e => setCountryCode(e.target.value)}></input>
                    <p className="text-xs mx-4 mb-4 mt-1 text-yellow-500">{res.Code_Error}</p>
                </div>
            </div>


        </div>
    )
}

export default CreateContacts;