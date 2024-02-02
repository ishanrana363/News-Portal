import { Link, useLocation } from "react-router-dom"
import newsPaper from "..//../assets/newspaper.png";
import {AiFillDashboard,AiOutlinePlus} from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { FaUserSecret } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";


const Sidebar = () => {
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <div className=" w-[250px] h-screen fixed bg-white top-0 left-0 " >
      <div className=" h-[70px] flex justify-center items-center " >
          <Link to= "/" >
            <img className=" w-[150px] " src= {newsPaper} alt="" />
          </Link>
      </div>
      <ul className= " px-3 flex flex-col gap-y-1 font-medium " >
          <li>
            <Link to= "/dashboard/admin" className={` ${pathname==="/dashboard/admin" ? ` bg-indigo-700 text-white ` : `bg-white text-[#4040f6]` } px-3 flex py-2 justify-start items-center w-full
            hover:shadow-lg hover:shadow-indigo-500/300 hover:bg-indigo-500/100 rounded-lg hover:text-white  `} >
              <span className="text-xl  " > <AiFillDashboard />  </span>
              <span className=" mx-2" >Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to= "/dashboard/news" className={` ${pathname==="/dashboard/news" ? ` bg-indigo-700 text-white ` : `bg-white text-[#4040f6]` } px-3 flex py-2 justify-start items-center w-full
            hover:shadow-lg hover:shadow-indigo-500/300 hover:bg-indigo-500/100 rounded-lg hover:text-white  `} >
              <span className="text-xl" > <BiNews />  </span>
              <span className=" mx-2" >News</span>
            </Link>
          </li>
          <li>
            <Link to= "/dashboard/writer/add" className={` ${pathname==="/dashboard/writer/add" ? ` bg-indigo-700 text-white ` : `bg-white text-[#4040f6]` } px-3 flex py-2 justify-start items-center w-full
            hover:shadow-lg hover:shadow-indigo-500/300 hover:bg-indigo-500/100 rounded-lg hover:text-white  `} >
              <span className="text-xl  " > <AiOutlinePlus />  </span>
              <span className=" mx-2" >Add Writer</span>
            </Link>
          </li>
          <li>
            <Link to= "/dashboard/writes" className={` ${pathname==="/dashboard/writes" ? ` bg-indigo-700 text-white ` : `bg-white text-[#4040f6]` } px-3 flex py-2 justify-start items-center w-full
            hover:shadow-lg hover:shadow-indigo-500/300 hover:bg-indigo-500/100 rounded-lg hover:text-white  `} >
              <span className="text-xl  " > <FaUserSecret />  </span>
              <span className=" mx-2" >Writers</span>
            </Link>
          </li>
          <li>
            <Link to= "/dashboard/profile" className={` ${pathname==="/dashboard/profile" ? ` bg-indigo-700 text-white ` : `bg-white text-[#4040f6]` } px-3 flex py-2 justify-start items-center w-full
            hover:shadow-lg hover:shadow-indigo-500/300 hover:bg-indigo-500/100 rounded-lg hover:text-white  `} >
              <span className="text-xl  " > <ImProfile />  </span>
              <span className=" mx-2" >Profile</span>
            </Link>
          </li>
          <li>
            <Link to= "/dashboard/logout" className={` ${pathname==="/dashboard/logout" ? ` bg-indigo-700 text-white ` : `bg-white text-[#4040f6]` } px-3 flex py-2 justify-start items-center w-full
            hover:shadow-lg hover:shadow-indigo-500/300 hover:bg-indigo-500/100 rounded-lg hover:text-white  `} >
              <span className="text-xl  " > <IoIosLogOut />  </span>
              <span className=" mx-2" >Logout</span>
            </Link>
          </li>
      </ul>
    </div>
  )
}

export default Sidebar
