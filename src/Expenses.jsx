import React from "react";
import NavLinkLms from "./NavLinkLms.jsx";

export default function Expenses(){
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

                    <div className="col-md-9 p-5">
                    <div className="row justify-content-center">
                    <div className="col-md-6">
                                <h3 className="mt-4">Expenses And Revenue</h3>
                            </div>
                            <div className="col-md-6">
                                    <ul className="ul4">
                                        <li><div><i class="fa-solid fa-bell text-white"></i></div></li>
                                        <li><div className="sname"><i className="text-white">TS</i></div></li>
                                    </ul>
                                </div>
                            
                            <div className="col-md-10 mainbox mt-5 p-5 bg-white text-center">
                            <i><img className="student" src="img/expensesbg.png" width={"100%"} /></i>
                            <p><b>You don't have any expenses or other revenue yet</b></p>
                            <p>Stay on top of your expenses and record all other sources of revenue here</p>

                            <div className="expenses justify-content-center text-center ">
                                    <a href="" className="expensesbtn"><button>Add New Expense <i className="arrow" class="fa-solid fa-caret-down ml-3"></i></button> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}