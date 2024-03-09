import React from "react";
import NavLinkLms from "./NavLinkLms.jsx";

export default function Report(){
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
                                <h3 className="mt-4">Business Report</h3>
                            </div>
                            <div className="col-md-6">
                                    <ul className="ul4">
                                        <li><div><i class="fa-solid fa-bell text-white"></i></div></li>
                                        <li><div className="sname"><i className="text-white">TS</i></div></li>
                                    </ul>
                                </div>
                            
                            <div className="col-md-10 mainbox mt-5 p-5 bg-white text-center">
                               <h3>Business Report</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}