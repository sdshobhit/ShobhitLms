import React from "react";
import "./Login.css";
export default function LoginPrivate(){
    return(
        <>
        <section className="login p-5">
            <form>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <h3>Login as a Private Tutor</h3>
                            <span className="span1">No credit card required</span>
                        </div>
                        <div className="col-md-4 mt-5 p-4 text-center bg-white shadow">
                            <h6>Let’s get started!</h6>
                            <span className="span2">Sign up now</span>
                            <input type="text" className="form-control mt-3" placeholder="First Name"/><br />
                            <input type="text" className="form-control" placeholder="Last Name"/><br />
                            <input type="email" className="form-control" placeholder="Email Address"/><br />
                            <input type="password" className="form-control" placeholder="Password"/><br />
                            <input type="text" className="form-control" placeholder="Business Name"/><br />
                            <input type="text" className="form-control" placeholder="Business Size"/><br />
                            <span className="span3"><input className="form-control checkbox mr-1" type="checkbox" />I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</span><br />
                            <button className="btn mt-3">Create My Teacher Account</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        </>
    )
}