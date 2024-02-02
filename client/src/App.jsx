import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "./dashboard/layout/MainLayout"
import AdminIndex from "./dashboard/pages/AdminIndex"
import Login from "./dashboard/pages/Login"
import ProtectDashboard from "./middleware/ProtectDashboard"
import ProtectRole from "./middleware/ProtectRole"
import Unable from "./dashboard/pages/Unable"
import AddWritter from "./dashboard/pages/AddWritter"
import Writes from "./dashboard/pages/Writes"
import News from "./dashboard/pages/News"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/login" element = { <Login/> } />
        <Route path="/dashboard" element = { <ProtectDashboard/> } >
          <Route path="" element = {<MainLayout/> } >
          <Route path="unable-access" element = { <Unable/> } />
          <Route path="news" element = { <News role ="writer" /> } />
            <Route path="" element ={ < Navigate to ="/dashboard/admin"/> } />
              <Route path="" element = { <ProtectRole role = "admin" /> }> 
              <Route path="admin" element = { <AdminIndex/> } />
              <Route path="writer/add" element = { <AddWritter/> } />
              <Route path="writes" element = { <Writes/> } />
            </Route>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

