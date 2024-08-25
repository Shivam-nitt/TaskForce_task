import { useEffect, useState } from "react";
import NavBar from "../header";
import {Link} from 'react-router-dom';

function ClassBPage() {
    const [classData, setClassData] = useState([]);

    useEffect(() => {
        let UserProfile = async function UserProfile() {
            const response = await fetch("http://localhost:4000/classB", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setClassData(data);  // Set the entire response object
        };
        UserProfile();
    }, []);

    return (
        <div className="bg-[rgb(63,63,70)] min-h-screen ">
            <NavBar />
            <h2 className="flex justify-evenly text-center mt-[20px]">
                <span className=" bg-blue-800 rounded-lg text-white border-solid border-black border-2 p-2">
                    Class B Students
                </span>    

            <Link to={"/"} >
             <button className=" bg-blue-800 rounded-lg text-white border-solid border-black border-2 p-2" >
                Home
             </button>
             </Link>

             <Link to={"/ClassA"} >
             <button className=" bg-blue-800 rounded-lg text-white border-solid border-black border-2 p-2" >
                Go to ClassA
             </button>
             </Link>
            </h2>

            <div className="grid grid-cols-2 gap-y-[20px] ml-[50px] mt-[20px] grid-rows-3 md:grid-cols-3 md:grid-rows-2 justify-around">
                {
                    classData.map((e, i) => (
                        <div className="h-[250px] w-[250px] flex flex-col items-center rounded-lg border-solid border-2 border-black" key={i}>
                            <img className="h-[200px] mt-[5px] text-center w-[200px] border-solid border-black border-2 rounded-xl" src="https://th.bing.com/th/id/OIP.YpQ0oZGLK4k09k6sq354OwHaHx?rs=1&pid=ImgDetMain" alt="Profile" />
                            <div className="text-center m-2" >
                                <span className="border-solid p-[5px] rounded-lg  shadow-[2px_2px_2px_black] bg-[#5ce05c] border-2 border-black ">
                                {e.Username}</span></div>     
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ClassBPage;
