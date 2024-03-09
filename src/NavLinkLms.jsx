import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
export default function NavLinkLms(){
    return(
        <>
        <ul className="ul3">
            <li><img src="img/home.png" alt="" /><NavLink to="/">Home</NavLink></li>
            <li><img src="img/student.png" alt="" /><NavLink to="/student">Student</NavLink></li>
            <li><img src="img/calender.png" alt="" /><NavLink to="/calender">Calender</NavLink></li>
            <li><img src="img/onlineres.png" alt="" /><NavLink to="/resources">Online Resoureces</NavLink></li>
            <li><img src="img/report.png" alt="" /><NavLink to="/expenses">Expenses Revenue</NavLink></li>
            <li><img src="img/news.png" alt="" /><NavLink to="/announcements">Announcements</NavLink></li>
            <li><img src="img/report.png" alt="" /><NavLink to="/website">Website</NavLink></li>
            <li><img src="img/report.png" alt="" /><NavLink to="/report">Business Report</NavLink></li>
        </ul>
        </>
    )
}