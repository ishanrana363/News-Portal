import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const MainLayout = () => {
return (
    <div className='min-w-screen min-h-screen bg-slate-100 ' >
        <Outlet/>
        <Sidebar/>
    </div>
)
}

export default MainLayout
