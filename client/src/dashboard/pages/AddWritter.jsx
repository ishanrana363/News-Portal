import React from 'react'
import { Link } from 'react-router-dom'

const AddWritter = () => {
  return (
    <>
      <div className=" bg-white pt-1 mt-1 rounded " >
          <div className= "flex justify-between p-4 " >
            <h1 className=' text-lg font-medium' >Add Writers</h1>
              <Link
                to="/dashboard/create/writter"className="rounded-md px-3 py-[6px] bg-purple-500 text-white hover:bg-purple-700">
                Writers
              </Link>
          </div>
          
      </div>
      <form>
            <div className=' mt-6 ' >
                <div className=' grid grid-cols-2 gap-x-8 mb-3' >
                    <div className=' flex flex-col gap-y-3 ' > 
                        <label className='text-md font-medium text-gray-600' htmlFor="name">Name</label>
                        <input  type="text" placeholder='name' name='name' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id='name' />
                    </div>
                    <div className='flex flex-col mt-1 gap-y-2'>
                        <label className='text-md font-medium text-gray-600' htmlFor="category">Category</label>
                        <select name='category' id='category' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' >
                          <option value="">---select category---</option>
                          <option value="Education">Education</option>
                          <option value="Travel">Travel</option>
                          <option value="Health">Health</option>
                          <option value="International">International</option>
                          <option value="Sports">Sports</option>
                          <option value="Technology">Technology</option>
                        </select>
                    </div>
                </div>
                <div className=' grid grid-cols-2 gap-x-8 mb-3' >
                    <div className=' flex flex-col gap-y-3 ' > 
                        <label className='text-md font-medium text-gray-600' htmlFor="email">Email</label>
                        <input  type="email" placeholder='email' name='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id='email' />
                    </div>
                    <div className='flex flex-col mt-1 gap-y-2'>
                        <label className='text-md font-medium text-gray-600' htmlFor="password">password</label>
                        <input  type="password" placeholder='password' name='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id='password' />
                    </div>
                </div>
            </div>
            <div>
            <button type='submit'
                className="rounded-md px-3 py-[6px] bg-purple-500 text-white hover:bg-purple-700">
                Add Writter
            </button>
            </div>
          </form>
    </>
  )
}

export default AddWritter
