import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import logoDark from '../../assets/images/logo-dark.png'

import bg1 from '../../assets/images/bg/bg-lines-one.png'

import { FiHome } from '../../assets/icons/vander'

import {UserLogin} from '../Utils/services/post';
import Cookies from 'js-cookie';


const Login =() =>{
    const navigate = useNavigate();

    useEffect(() =>{
        const IS_ACCESS = Cookies.get('token');
        if(IS_ACCESS !== undefined){
            navigate('/index');
        }else{
            navigate('/login');
        }

    },[]);


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');



    const signIn = async () =>{
        try{
            if(email === undefined || email.length === 0){

            }else if(password === undefined || password.length === 0){

            }else{
                let data = {
                    email : email,
                    password : password
                }

                let result = await UserLogin(data);
                if(result.access !== undefined ||result.access.length !== 0){
                    navigate('/index');
                }else{
                    navigate('/');
                }
            }
        }catch (error){
            console.log(error)
        }
    }

    
    return(
        <>
        <div className="back-to-home rounded d-none d-sm-block">
            <Link to="/index" className="btn btn-icon btn-primary"><FiHome className="icons"/></Link>
        </div>

        <section className="bg-home d-flex bg-light align-items-center" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <img src={logoDark} height="22" className="mx-auto d-block" alt=""/>
                        <div className="card login-page shadow mt-4 rounded border-0">
                            <div className="card-body">
                                <h4 className="text-center">Sign In</h4>  
                                <form className="login-form mt-4" onSubmit={(event) => event.preventDefault()}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-3">

                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" placeholder="" name="EmailAddress" required
                                                value = {email} onChange={e=> setEmail(e.target.value)}
                                                />

                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Password <span className="text-danger">*</span></label>
                                                <input type="password" className="form-control" placeholder="" required
                                                value = {password} onChange={e=> setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="d-flex justify-content-between">
                                                <div className="mb-3">
                                                    <div className="form-check">
                                                    </div>
                                                </div>
                                                <Link to="/forgot-password" className="text-dark h6 mb-0">Forgot password ?</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-0">

                                            <div className="d-grid">
                                                <button className="btn btn-primary" type="submit" onClick={() => {signIn()}} >Sign in</button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </section>
        </>
    )
}

export default Login