import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from './contex/darkModeContext'

const userInputs = [
  {
      id: 1,
      label: "Username",
      type: "text",
      placeholder: "john_doe",
  },
  {
      id: 2,
      label: "Name and surname",
      type: "text",
      placeholder: "John Doe",
  },
  {
      id: 3,
      label: "Email",
      type: "mail",
      placeholder: "john_doe@gmail.com",
  },
  {
      id: 4,
      label: "Phone",
      type: "text",
      placeholder: "+1 234 567 89",
  },
  {
      id: 5,
      label: "Password",
      type: "password",
  },
  {
      id: 6,
      label: "Address",
      type: "text",
      placeholder: "Elton St. 216 NewYork",
  },
  {
      id: 7,
      label: "Country",
      type: "text",
      placeholder: "USA",
  },
];

export const productInputs = [
  {
      id: 1,
      label: "Title",
      type: "text",
      placeholder: "Apple Macbook Pro",
  },
  {
      id: 2,
      label: "Description",
      type: "text",
      placeholder: "Description",
  },
  {
      id: 3,
      label: "Category",
      type: "text",
      placeholder: "Computers",
  },
  {
      id: 4,
      label: "Price",
      type: "text",
      placeholder: "100",
  },
  {
      id: 5,
      label: "Stock",
      type: "text",
      placeholder: "in stock",
  },
];




function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='users'>
              <Route index element={<List/>}/>
              <Route path=':userId' element={<Single/>}/>
              <Route path='new' element={<New inputs = {userInputs} title='Add New User'/>}/>
            </Route>
            <Route path='products'>
              <Route index element={<List/>}/>
              <Route path=':productId' element={<Single/>}/>
              <Route path='new' element={<New inputs = {productInputs} title='Add New Product'/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
