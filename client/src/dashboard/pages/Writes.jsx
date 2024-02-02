import { Link } from "react-router-dom"

import { FaEye } from "react-icons/fa";
const Writes = () => {
  return (
    <>
      <div className=" bg-white pt-1 mt-1 rounded " >
          <div className= "flex justify-between p-4 " >
            <h1 className=' text-lg font-medium' >Add Writers</h1>
              <Link
                to="/dashboard/writer/add"className="rounded-md px-3 py-[6px] bg-purple-500 text-white hover:bg-purple-700">
                Add writter
              </Link>
          </div>
          
      </div>
      <div className=' relative overflow-x-auto p-4 ' >
            <table  className=' w-full text-sm text-left text-slate-600 bg-gray-100 rounded-md ' >
                <thead className=' text-xs text-gray-700 uppercase bg-gray-50  ' >
                    <tr>
                    <th className='px-7 py-3'>No</th>
                        <th className='px-7 py-3'>Name</th>
                        <th className='px-7 py-3'>Category</th>
                        <th className='px-7 py-3'>Role</th>
                        <th className='px-7 py-3'>Image</th>
                        <th className='px-7 py-3'>Email</th>
                        <th className='px-7 py-3'>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1,2,3,4,5,6,7].map((item,i)=>
                            <tr key={i} >
                                <td className='px-6 py-4' >1</td>
                                <td className='px-6 py-4' > Ishan  </td>
                                <td className='px-6 py-4' >
                                    Travel
                                </td>
                                <td className='px-6 py-4' >
                                    Writter
                                </td>
                                <td className='px-6 py-4' >
                                    <img className=' w-[40px] h-[40px] ' src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg" alt="" />
                                </td>
                                
                                <td className='px-6 py-4' >ishanrana@gmail.com</td>
                                
                                <td className='px-6 py-4' >
                                    <div className=' flex justify-start items-center gap-x-4 text-white ' >
                                        <Link className=' p-[6px] bg-green-700 rounded hover:shadow-lg ml-1 hover:shadow-green-500/50 ' to="" > 
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

    </>
  )
}

export default Writes
