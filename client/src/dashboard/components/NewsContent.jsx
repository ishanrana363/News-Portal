import React from 'react'
import { Link } from 'react-router-dom';
import { FaEye,FaEdit,FaTrash   } from "react-icons/fa";

const NewsContent = () => {
  return (
    <div>
        <div className=' px-4 py-3 flex gap-x-3  ' >
        <select className="px-4 py-2 rounded-md outline-0 
        border border-gray-300 focus:border-green-500 outline-none h-10 " >
            <option value="" >---select type---</option>
            <option value="" > Pending </option>
            <option value="" >Active</option>
            <option value="" >Deactive</option>
        </select>
            <input type="text" placeholder="search news" className="px-4 py-2 rounded-md outline-0 
            border border-gray-300 focus:border-green-500 outline-none h-10 " />
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
                        <th className=" px-7 py-4" > Data </th>
                        <th className=" px-7 py-4" > Status </th>
                        <th className=" px-7 py-4" > Action </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                                <Link className=' p-[6px] bg-yellow-700 rounded hover:shadow-lg hover:shadow-yellow-500/50 ' to="" > 
                                    <FaEdit />
                                </Link>
                                <Link className=' p-[6px] bg-red-700 rounded hover:shadow-lg hover:shadow-red-500/50 ' to="" > 
                                    <FaTrash  />
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)
}

export default NewsContent
