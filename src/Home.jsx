import React from "react";
import NavLinkLms from "./NavLinkLms.jsx";

export default function Home(){
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

                    <div className="col-md-9 p-4">
                    <div className="row justify-content-center">
                    <div className="col-md-6">
                                <h3 className="mt-4">Home</h3>
                            </div>
                            <div className="col-md-6">
                                    <ul className="ul4">
                                        <li><div><i class="fa-solid fa-bell text-white"></i></div></li>
                                        <li><div className="sname"><i className="text-white">TS</i></div></li>
                                    </ul>
                                </div>
                                
                            <div className="col-md-12 steps">
                                <div className="row">
                                    <div className="col-md-12 mt-5">
                                        <h3>Lets Get Started Tushar</h3>
                                    </div>
                                <div className="col-1 text-center account">
                                    <ul>
                                        <li className="step1"><img src="img/account.png"/></li>
                                    </ul>
                                </div>
                                <div className="col-1 hr">
                                    <hr />
                                </div>
                                <div className="col-1 text-center addstudent">
                                    <ul>
                                    <li className="step2"><img src="img/addstud.png"/></li>
                                    </ul>
                                </div>
                                <div className="col-1 hr">
                                    <hr />
                                </div>
                                <div className="col-1 text-center eventshedule">
                                    <ul>
                                    <li className="step3"><img src="img/eventschedule.png"/></li>
                                    </ul>
                                </div>
                                <div className="col-1 hr">
                                    <hr />
                                </div>
                                <div className="col-1 text-center gotit">
                                    <ul>
                                    <li className="step4"><img src="img/gotit.png"/></li>
                                    </ul>
                                </div>
                                <div className="col-1 hr">
                                    <hr />
                                </div>
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