import React, { useEffect } from "react"
import { useState } from "react";
import Search from "./Search"
import ContactList from "./ContactList";
import FootBar from "./FootBar";
import Settings from "../IntraComponenets/Settings"
import CreateContacts from "../IntraComponenets/CreateContact";
import Api from "../ApiConfig"
import Favourites from "../IntraComponenets/Favourites";
import Deleted from "../IntraComponenets/Deleted";


const Home = ({user}) => {
    
    const [res, setRes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${Api}/user/${user}/contacts/`);
                const data = await response.json();
                setRes(data);

                const res = await fetch(`${Api}/user/${user}/settings/`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: "GET"
                    });
                const r = await res.json();
                setIsToggled(r.Number_Feature_Flag)
                setIsThemeToggled(r.Dark_mode_feature)
    
            } catch (error) {
                console.error("Error", error);
            }
        };

       
        fetchData();
        
    }, [user]);



    const [showSettings, setShowSettings] = useState(false);
    const handleSettings = () => {
        setShowSettings(true);
    }
    const handleSettingsBack = () => {
        setShowSettings(false);
    };


    const [showPlus, setShowPlus] = useState(false);
    const handlePlus = () => {
        setShowPlus(true);
    }
    const handlePlusBack = () => {
        setShowPlus(false);

    }

    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () =>{
        setTimeout(() => {
        setIsEdit(true);
        },100);
    }

    const [checkedContacts, setCheckedContacts] = useState([]);

    const handleCheck = (id) => {
        setCheckedContacts(prevState => {
            if (prevState.includes(id)) {
                return prevState.filter(contactId => contactId !== id);
            } else {
                return [...prevState, id];
            }
        });
    };

    const handleSelectAll = () => {
        if (checkedContacts.length === res.length) {
            setCheckedContacts([]);
        } else {
            setCheckedContacts(res.map((m) => m.id));
        }
    };



    const [isToggled, setIsToggled] = useState(true);
    const [isThemeToggled, setIsThemeToggled] = useState(true);

    const handleNumberToggle = () => {
        setIsToggled(!isToggled);
    }
    const handleThemeToggle = () => {
        setIsThemeToggled(!isThemeToggled);
    }



    const [favClicked, setFavClicked] = useState(false);
    const [binClicked, setBinClicked] = useState(false);

    const [disableEdit, setDisableEdit] = useState(false);

    const handleFootBarClick =(index) =>{
        if(index === 0){
            setFavClicked(false);
            setBinClicked(false);
            setDisableEdit(false);
        }
        else if(index ===1){
            setFavClicked(true);
            setDisableEdit(true)
        }
        else{
            setFavClicked(false)
            setBinClicked(true);
            setDisableEdit(true)
        }

    }


    return (

        <>
            {showSettings ? <Settings handleBack={handleSettingsBack} user={user} isToggled = {isToggled} handleNumberToggle= {handleNumberToggle} isThemeToggled={isThemeToggled} handleThemeToggle={handleThemeToggle}/>

                : showPlus ? <CreateContacts handlePlusBack={handlePlusBack} isThemeToggled={isThemeToggled} />

                    :
                        <div className={isThemeToggled?"container bg-black text-white xs:w-1/2 sm:w-2/3 lg:w-1/3 h-screen" : "container bg-white text-black xs:w-1/2 sm:w-2/3 lg:w-1/3 h-screen"  } >
                            <div className="sticky">
                                <div className="flex items-center px-6 mb-6 justify-center pt-8 pb-3">

                                    {isEdit ? <p className="text-lg font-semibold cursor-pointer" onClick={handleSelectAll}>Select All</p> : <p className="text-2xl font-semibold">Contacts</p>}
                                    
                                    <span className="grow "></span>
                                    {isEdit ? <p className="text-lg font-semibold cursor-pointer" onClick={() => setIsEdit(false)}>Cancel</p> : null}

                                    {!disableEdit && !isEdit && <button className={ res.length === 0 ? `text-gray-500 text-xl font-semibold pl-5 cursor-pointer` : ` text-xl font-semibold pl-5 cursor-pointer`} onClick={handleEdit} disabled={res.length === 0} >Edit</button>}
                                    {!isEdit && <p className="text-3xl px-5 cursor-pointer"><i className="bi bi-plus" onClick={handlePlus}></i></p>}
                                    {!isEdit && <p className="text-xl cursor-pointer"><i className="bi bi-gear" onClick={handleSettings}></i></p>}
                                </div>

                                <Search isThemeToggled={isThemeToggled} />

                                <div className="flex items-center px-6 mt-10 cursor-pointer ">
                                    <p className="text-sm">vivo Customer Care</p>
                                    <span className="grow"></span>
                                    <i className="text-sm bi bi-chevron-right"></i>
                                </div>

                                <div className="flex items-center px-6 mt-6 cursor-pointer">
                                    <p className="text-sm">Personal data</p>
                                    <span className="grow"></span>
                                    <i className="text-sm bi bi-chevron-right"></i>
                                </div>
                            </div>

                            {favClicked ? <Favourites isThemeToggled={isThemeToggled} user={user}/>
                            
                            : binClicked ? <Deleted isThemeToggled={isThemeToggled} user={user}/>
                            : <ContactList isThemeToggled={isThemeToggled} isEdit= {isEdit} res= {res}  handleCheck= {handleCheck}  checkedContacts={checkedContacts} isToggled= {isToggled}/> 
                        }
                            <FootBar isThemeToggled={isThemeToggled} user ={user} checkedContacts={checkedContacts} isEdit= {isEdit} handleFootBarClick={handleFootBarClick} />
                        </div>

                       

            }



        </>

    )
}

export default Home;