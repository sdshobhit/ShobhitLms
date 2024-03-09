import React from "react";
import NavLinkLms from "./NavLinkLms";
import "./style.css";

export default function Student(){
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

                    <div className="col-md-9 mb-5 p-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="mt-4">Students</h3>
                        </div>
                        <div className="col-md-6">
                                <ul className="ul4">
                                    <li><div><i class="fa-solid fa-bell text-white"></i></div></li>
                                    <li><div className="sname"><i className="text-white">TS</i></div></li>
                                </ul>
                            </div>
                            <div className="col-md-12 mt-5 p-3 batches">
                                <ul className="ulbatches">
                                    <li><a href="#">Student</a></li>
                                    <li className="ml-5"><a href="#">Batches</a></li>
                                </ul>
                            </div>
                            
                            <div className="col-md-12 studentmain bg-white mt-5 p-5 text-center">
                            <div className="addstudent p-5">
                                 <ul className="studul1">
                                   <li>
                                    <a href="" className="add"><button> Add New <i class="fa-solid fa-caret-down ml-3"></i></button> </a>
                                </li>
                                <li className="ml-5">
                                <a href="" className="messaging"><button>Messaging <i class="fa-solid fa-caret-down ml-3"></i></button> </a>
                                </li>
                                </ul>
                                </div>


                            <i><img className="student" src="img/studentbg.png" width={"100%"} /></i>
                            <p><b>You don't have any Students Yet</b></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}