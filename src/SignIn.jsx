import React from "react";
import "./SignIn.css";
export default function SignIn(){
    return(
        <>
        <section className="signin p-5">
            <form>
                <div className="container_fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <span className="span1"><a href="">No credit card required</a></span>
                            <h3>Login as a Tutor</h3>
                        </div>
                        <div className="col-md-6 mt-5 p-4 bg-white shadow">
                           <h6>Student Details</h6>
                           <div className="row">
                            <div className="col-md-6">
                                <label>First Name</label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-md-6">
                                <label>Last Name</label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-md-6">
                                <label className="mt-3">Email Address</label>
                                <input className="form-control" type="email"/>
                            </div>
                            <div className="col-md-6">
                                <select className="form-control mt-1">
                                    <option>Select Country Code</option>
                                    <option>+1 Us</option>
                                    <option>+2 Africa</option>
                                    <option>+3 North America</option>
                                    <option>+4 Europe</option>
                                    <option>+91 India</option>
                                </select>
                                <input className="form-control mt-2" placeholder="Phone Number" type="number"/>
                            </div>
                            <div className="col-md-6">
                                <a href="#">+ Show additional details</a>
                            </div>
                            <div className="col-md-6">
                                <ul className="ul1">
                                    <li><input className="checkbox mr-1" type="checkbox" /></li>
                                    <li>SMS Capable</li>
                                </ul>
                            </div>
                            <div className="col-md-12">
                                <h6>Status</h6>
                                <input type="radio" value="Active"/>
                                <label className="ml-3">Active</label>
                                <input className="ml-5" type="radio"/>
                                <label className="ml-3">Trial</label>
                                <input className="ml-5" type="radio"/>
                                <label className="ml-3">Waiting</label>
                                <input className="ml-5" type="radio"/>
                                <label className="ml-3">Lead</label>
                                <input className="ml-5" type="radio"/>
                                <label className="ml-3">Inactive</label>
                                <hr />
                            </div>
                            <div className="col-md-12 mt-3">
                                <h6>Student Type</h6>
                                <input type="radio"/>
                                <label className="ml-3">Adult</label>
                                <input className="ml-5" type="radio"/>
                                <label className="ml-3">Teen</label>
                                <input className="ml-5" type="radio"/>
                                <label className="ml-3">Kid</label>
                                <h6 className="mt-3">New Family</h6>
                                <input className="ml-5" type="radio"/>
                                <label className="ml-3">Existing Family</label>
                                <p>Creates a new  account in Families & invoices</p>
                            </div>

                            <div className="col-md-6">
                                <label>Parent First Name</label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-md-6">
                                <label>Parent Last Name</label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-md-6">
                                <label className="mt-3">Email Address</label>
                                <input className="form-control" type="email"/>
                            </div>
                            <div className="col-md-6">
                                <select className="form-control mt-1">
                                    <option>Select Country Code</option>
                                    <option>+1 Us</option>
                                    <option>+2 Africa</option>
                                    <option>+3 North America</option>
                                    <option>+4 Europe</option>
                                    <option>+91 India</option>
                                </select>
                                <input className="form-control mt-2" placeholder="Mobile Number" type="number"/>
                                <ul className="ul1">
                                    <li><input className="checkbox mr-1" type="checkbox" /></li>
                                    <li>SMS Capable</li>
                                </ul>
                            </div>
                            <div className="col-md-12">
                                <label>Address <span className="span2">Optional</span></label>
                                <textarea className="form-control"></textarea>
                            </div>
                            <div className="col-md-12 mt-2">
                                <h6>Preferences</h6>
                                <ul className="ul2">
                                    <li><input className="checkbox mr-1" type="checkbox" /> Send email lessons reminders</li>
                                    <li><input className="checkbox mr-1" type="checkbox" /> Send SMS lessons reminders</li>
                                    <li>Will only be sent if SMS messaging is allowed</li>
                                </ul>
                                <hr />
                            </div>
                            <div className="col-md-6">
                                <label>Default Lesson Category</label><br />
                                <select className="form-control">
                                    <option>Lessson</option>
                                    <option>Lesson 1</option>
                                    <option>Lesson 2</option>
                                    <option>Lesson 3</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label>Default Lesson Length</label><br />
                                <select className="form-control">
                                    <option>30 <span className="span2">minutes</span></option>
                                    <option>45 <span className="span2">minutes</span></option>
                                    <option>60 <span className="span2">minutes</span></option>
                                </select>
                            </div>
                            <div className="col-md-12 mt-3">
                                <h6>Default Billing</h6>
                                <ul className="ul3">
                                <li><input className="checkbox mr-1" type="checkbox" /> Don’t automatically create any calander-generated charges</li>
                                    <li><input className="checkbox mr-1" type="checkbox" /> Student pays based on the number of lessons taken</li>
                                    <li><input className="checkbox mr-1" type="checkbox" /> Student pays the same amount each month regardless of number of lessons</li>
                                    <li><input className="checkbox mr-1" type="checkbox" /> Student pays an hourly rate</li>
                                    <li>Charges will automatically adjust to lesson length</li>
                                </ul>
                            </div>
                            <div className="col-md-12 mt-2">
                                <label>Price</label><br />
                                <select className="form-control">
                                    <option>&#8377; 30 <span className="span3">Per Lessons</span></option>
                                </select>
                                <hr />
                            </div>
                            <hr />
                            <div className="col-md-12 mt-2">
                                <label>Note <span className="span4">Optional</span></label><br />
                                <p>Use this area for any private notes you wish to keep.</p>
                                <textarea className="form-control"></textarea>
                                <hr />
                            </div>
                            <div className="col-md-12 mt-2">
                                <button>Cancel</button>
                                <button>Next</button>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        </>
    )
}