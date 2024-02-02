import { Link } from 'react-router-dom'
import NewsContent from '../components/NewsContent';

const News = ({role}) => {
  const userInfo = {
    role : "admin"
  }  
  return (
    <div className=' bg-white rounded-md '>
      <div className= "flex justify-between p-4 " >
        <h1 className=' text-lg font-medium' >News</h1>
        {userInfo.role !== role && (
          <Link
            to="/dashboard/news/create"
            className="rounded-md px-3 py-[6px] bg-purple-500 text-white hover:bg-purple-700"
          >
            Create News
          </Link>
        )}
        
      </div>     
      <NewsContent/> 
    </div>
  )
}

export default News;
