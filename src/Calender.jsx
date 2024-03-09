import React from "react";
import NavLinkLms from "./NavLinkLms.jsx";

export default function Calender(){
    return(
        <>
        <section className="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-12">
                                
                                    <ul className="ul1">
                                        <li>
                                        <div className="profile"><img src="img/2.jpg" width={"100%"} /></div>
                                        </li>
                                        <li>
                                            <span>Tutor Octopous</span>
                                        </li>
                                    </ul>
                            </div>
                            <div className="col-md-12 padding">
                            <NavLinkLms></NavLinkLms>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-9 attendace p-5">
                        <div className="row">
                        <div className="col-md-6">
                                <h3 className="mt-4">Calender</h3>
                            </div>
                            <div className="col-md-6">
                                    <ul className="ul4">
                                        <li><div><i class="fa-solid fa-bell text-white"></i></div></li>
                                        <li><div className="sname"><i className="text-white">TS</i></div></li>
                                    </ul>
                                </div>

                            <div className="col-md-12 mt-5 text-center">
                            <div className="profile2"></div>
                                <ul className="mt-3">
                                    <li><h3>Tushar Sharma</h3></li>
                                    <li><h6>ts310118@gmail.com</h6></li>
                                </ul>
                            </div>

                            <div className="col-md-12">
                                <h4 className="heading">Total Attendace</h4>
                            </div>
                            <div className="col-md-12 attendace2 p-5 bg-white">
                                <div className="row">
                                    <div className="col-md-5 present">
                                        <ul>
                                            <li>Days Present</li>
                                            <li>21</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5 absent">
                                        <ul>
                                            <li>Days Absent</li>
                                            <li>01</li>
                                        </ul>
                                    </div>

                                    <div className="col-md-12 mt-4">
                                    <table border={"1"} width={"100%"} className="table3">
                                    <tr className="text-center days">
                                        <th>Mon</th>
                                        <th>Tue</th>
                                        <th>Wed</th>
                                        <th>Thu</th>
                                        <th>Fri</th>
                                        <th>Sat</th>
                                        <th>Sun</th>
                                    </tr>
                                    <tr>
                                        <td className="pb-5">
                                            <ul>
                                                <li>29</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>30</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>31</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li><b>Feb</b> 1</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>2</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>3</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li className="text-danger">4</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pb-5">
                                            <ul>
                                                <li>5</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>6</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>7</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>8</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>9</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>10</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li className="text-danger">11</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pb-5">
                                            <ul>
                                                <li>12</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>13</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>14</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>15</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>16</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>17</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li className="text-danger">18</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pb-5">
                                            <ul>
                                                <li>19</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>20</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>21</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>22</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>23</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>24</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li className="text-danger">25</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pb-5">
                                            <ul>
                                                <li>26</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5 absenty">
                                            <ul>
                                                <li><span>27</span></li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>28</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>29</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li><b>Mar</b> 1</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li>2</li>
                                            </ul>
                                        </td>
                                        <td className="pb-5">
                                            <ul>
                                                <li className="text-danger">3</li>
                                            </ul>
                                        </td>
                                    </tr>
                                        
                                </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4 text-center">
                                <button>Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}