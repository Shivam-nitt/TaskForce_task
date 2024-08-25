import NavBar from "./header";
import {Link} from 'react-router-dom';

function HomePage(){
  return(
 <div className="bg-zinc-700 w-full h-screen">
    <NavBar/>
    
    <div className="flex items-center justify-evenly h-screen">
    <Link to={"/ClassA"}>
      <button className="bg-[#cce017] p-[4px] px-[20px] text-xl border-solid border-2 border-black rounded-md shadow-[4px_4px_4px_black] hover:bg-black hover:text-[#cce017] hover:shadow-[4px_4px_4px_rgb(103,103,103)]" >
        Class A
      </button>
    </Link>

    <Link to={"/ClassB"}>
      <button className="bg-[#cce017] p-[4px] px-[20px] text-xl border-solid border-2 border-black rounded-md shadow-[4px_4px_4px_black] hover:shadow-[4px_4px_4px_rgb(103,103,103)] hover:bg-black hover:text-[#cce017]" >
        Class B
      </button>
    </Link>   
      </div> 

 </div>
  )
}

export default HomePage;