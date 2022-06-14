import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Matches from "./components/Matches";
import AdminPage from "./components/AdminPage";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/forside" exact element={<App/>}/>
        <Route path="/matches" exact element={<Matches/>}/>
        <Route path="/adminpage" exact element={<AdminPage/>}/>

        <Route path ="*" element={
            <div className="errorPage">
            <h2>Oops nothing here, go back</h2>
            </div>
        }/>
    </Routes>
  </BrowserRouter>
)
