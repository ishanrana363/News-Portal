import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "./dashboard/layout/MainLayout"
import AdminIndex from "./dashboard/pages/AdminIndex"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<MainLayout/>} >
          <Route path="" element ={ < Navigate to ="/dashboard/admin"/> } >
            <Route path="admin" element = { <AdminIndex/> } />
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

