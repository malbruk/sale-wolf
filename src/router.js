import {  Routes, Route } from "react-router-dom";
import Login from "./login";
import Point from "./point";
import Form from "./form"


export default function Router(){
    return(
        <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/point" element={<Point/>}/>             
        </Routes>
      
    )
}