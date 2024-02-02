import { Link } from "react-router-dom"

import { FaEye,FaEdit,FaTrash   } from "react-icons/fa";

const AdminIndex = () => {
return (
    <div>
        <div className=" grid grid-cols-5  gap-x-5 " >
            <div className=" flex flex-col justify-center items-center w-full p-9 rounded-md bg-white text-slate-700 " >
                <span>50</span>
                <span>Total news</span>
            </div>
            <div className=" flex flex-col justify-center items-center w-full p-9 rounded-md bg-white text-slate-700 " >
                <span>ishan</span>
                <span>Pendeing News</span>
            </div>
            <div className=" flex flex-col justify-center items-center w-full p-9 rounded-md bg-white text-slate-700 " >
                <span>ishan</span>
                <span>Active News</span>
            </div>
            <div className=" flex flex-col justify-center items-center w-full p-9 rounded-md bg-white text-slate-700 " >
                <span>ishan</span>
                <span>Deactive news</span>
            </div>
            <div className=" flex flex-col justify-center items-center w-full p-9 rounded-md bg-white text-slate-700 " >
                <span>ishan</span>
                <span>Writters</span>
            </div>
        </div>
        <div className=" bg-white mt-5 p-5 " >
            <div className=" bg-white flex justify-between items-center " >
                <h2>Recent News</h2>
                <Link> View all </Link>
            </div>
        </div>
        <div className=' relative overflow-x-auto p-4 ' >
            <table  className=' w-full text-sm text-left text-slate-600 bg-gray-100 rounded-md ' >
                <thead className=' text-xs text-gray-700 uppercase bg-gray-50  ' >
                    <tr>
                        <th className="px-7 py-4" > No </th>
                        <th className=" px-7 py-4" > Tilte </th>
                        <th className=" px-7 py-4" > Image </th>
                        <th className=" px-7 py-4" > Category </th>
                        <th className=" px-7 py-4" > Description </th>
                        <th className=" px-7 py-4" > Date </th>
                        <th className=" px-7 py-4" > Status </th>
                        <th className=" px-7 py-4" > Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1,2,3,4,5,6,7].map((item,i)=>
                            <tr key={i} >
                                <td className='px-6 py-4' >1</td>
                                <td className='px-6 py-4' > India gets its longest glass b...  </td>
                                <td className='px-6 py-4' >
                                    <img className=' w-[40px] h-[40px] ' src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg" alt="" />
                                </td>
                                <td className='px-6 py-4' >
                                    Travel
                                </td>
                                <td className='px-6 py-4' >You all must have wa.....</td>
                                <td className='px-6 py-4' >
                                    Octaber 10, 2023
                                </td>
                                <td className='px-6 py-4' >
                                    <span className=' px-3 py-1 bg-green-100 text-green-800 rounded-lg font-bold text-xs cursor-pointer ' >active</span>
                                </td>
                                <td className='px-6 py-4' >
                                    <div className=' flex justify-start items-center gap-x-4 text-white ' >
                                        <Link className=' p-[6px] bg-green-700 rounded hover:shadow-lg hover:shadow-green-500/50 ' to="" > 
                                            <FaEye />
                                        </Link>
                                        
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    </div>
)
}

export default AdminIndex
