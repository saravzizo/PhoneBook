const ContactList = ({ isEdit, res }) => {

    console.log(res)

    const OrderByLetter = "A"

    return (
        <div >
            <p className="text-sm px-6 mt-6 mb-4 ">{OrderByLetter}</p>
            <div className="px-6 mt-6 sticky overflow-y-scroll" style={{ maxHeight: "55vh", minHeight: "55vh", scrollbarWidth: "none" }} >



                {
                    [...res].sort((a, b) => a.contact_name.localeCompare(b.contact_name)).map((m)=> (

                        isEdit ?
                            <div className="flex flex-row items-center my-6">
                                <input type="checkbox" className="mr-5 block w-4 h-4 rounded-full"></input>
                                <div className="">
                                    <p className="text-md font-normal text-gray-200">{m.contact_name}</p>
                                    <p className="text-xs text-gray-400">+91 {m.contact_number}</p>
                                </div>
                            </div>
                            
                            :<div className="flex flex-col my-6">
                                <p className="text-md font-normal text-gray-200">{m.contact_name}</p>
                                <p className="text-xs text-gray-400">+91 {m.contact_number}</p>
                            </div>
                    )
                    )

                }







            </div>
        </div>


    )
}

export default ContactList;