import { useState } from "react";


const CreateContacts = ({ handlePlusBack }) => {

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(handlePlusBack, 100);
    }

    return (
        <div className={`container bg-black text-white xs:w-1/2 sm:w-2/3 lg:w-1/3 h-screen ${isClosing ? "slide-out-to-bottom" : "slide-in-from-bottom"}`} >
            <div className="flex flex-row items-center justify-between px-6 pt-8 mb-6 ">
                <p className="text-white font-semibold text-xl" onClick={handleClose}>Cancel</p>
                <p className="text-white  font-semibold text-lg" >New contact</p>
                <p className="text-white font-semibold text-xl">Save</p>
            </div>

                <div className="flex px-6 mb-6 pt-8 items-end justify-evenly">
                    <label className="px-4">Name</label>
                    <input type="text" className="bg-black border-b border-gray-500 outline-0"></input>
                </div>

                <div className="flex px-6 mb-6 pt-8 items-end justify-evenly">
                    <label className="px-4">Number</label>
                    <input type="number" className="bg-black border-b border-gray-500 outline-0"></input>
                </div>




        </div>
    )
}

export default CreateContacts;