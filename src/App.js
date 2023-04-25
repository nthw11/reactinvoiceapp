import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import './App.css';

import Home from './features/Home'
import Login from './features/Login'
import Register from './features/Register'
import EditUser from './features/EditUser'
import CreateInvoice from './features/CreateInvoice'
import EditExistinginvoice from './features/EditExistinginvoice'
import ViewInvoice from './features/ViewInvoice'
import RootLayout from './layouts/RootLayout'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='user/edit' element={<EditUser />} />
      <Route path='invoice/create' element={<CreateInvoice />} />
      <Route path='invoice/edit' element={<EditExistinginvoice />} />
      <Route path='invoice/view' element={<ViewInvoice />} />
    </Route>
  )
)



function App() {
  return <RouterProvider router={router} />
}

export default App;
