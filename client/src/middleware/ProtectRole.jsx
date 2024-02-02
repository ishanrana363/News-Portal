import { Navigate, Outlet } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ProtectRole = ({role}) => {
  const userInfo = {
    name : "ishan",
    role:"admin"
}
if(userInfo.role===role){
    return <Outlet/>
}else{
    return <Navigate to= "/dashboard/unable-access" />
}
}

export default ProtectRole
