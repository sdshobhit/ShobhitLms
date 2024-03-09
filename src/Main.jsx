import React from "react";
import Home from "./Home.jsx";
import Student from "./Student.jsx";
import Calender from "./Calender.jsx";
import Resources from "./Resources.jsx";
import Expenses from "./Expenses.jsx";
import Announcements from "./Announcements.jsx";
import Website from "./Website.jsx";
import Report from "./Report.jsx";
import "./style.css";
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";

export default function Main(){
    return(
        <>
        

        <Router>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Student" element={<Student></Student>}></Route>
                <Route path="/Calender" element={<Calender></Calender>}></Route>
                <Route path="/Resources" element={<Resources></Resources>}></Route>
                <Route path="/Expenses" element={<Expenses></Expenses>}></Route>
                <Route path="/Announcements" element={<Announcements></Announcements>}></Route>
                <Route path="/Website" element={<Website></Website>}></Route>
                <Route path="/Report" element={<Report></Report>}></Route>

            </Routes>
        </Router>
        </>
    )
}