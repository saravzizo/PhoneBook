import React from "react"
import Search from "./Search"
import ContactList from "./ContactList";
import FootBar from "./FootBar";

const Home = () => {



    return (
        <div className="container bg-black text-white  xs:w-1/2 sm:w-2/3 lg:w-1/3 h-screen " >
            <div className="sticky">
                <div className="flex items-center px-6 mb-6 justify-center pt-8 pb-3">
                    <p className="text-2xl font-semibold">Contacts</p>
                    <span className="grow "></span>
                    <p className="text-xl font-semibold pl-5">Edit</p>
                    <p className="text-3xl px-5"><i class="bi bi-plus"></i></p>
                    <p className="text-xl"><i class="bi bi-gear"></i></p>
                </div>

                <Search />

                <div className="flex items-center px-6 mt-6 ">
                    <p className="text-sm">vivo Customer Care</p>
                    <span className="grow"></span>
                    <i className="text-sm bi bi-chevron-right"></i>
                </div>

                <div className="flex items-center px-6 mt-6 ">
                    <p className="text-sm">Personal data</p>
                    <span className="grow"></span>
                    <i className="text-sm bi bi-chevron-right"></i>
                </div>

            </div>

            <ContactList />

            <FootBar />


        </div>
    )
}

export default Home;