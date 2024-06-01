import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'
import logoIcon from '../assets/images/logo-icon.png'
import doctor1 from '../assets/images/doctors/01.jpg'


import {FaBars, RiLogoutCircleRLine,} from '../assets/icons/vander'
import Cookies from 'js-cookie';


import Offcanvas from 'react-bootstrap/Offcanvas';
import PersonChatTwo from "./personChatTwo";

import { useNavigate } from "react-router-dom";

export default function TopHeader({toggle, setToggle}){

    const navigate = useNavigate();

    const navProfile = () =>{
        navigate('/dr-profile')
    }

    const logOut = () =>{
        let allCookies = Cookies.get();
        for(let cookie in allCookies) {
        Cookies.remove(cookie);
    }
    navigate('/');
    }
    let [userModal, setUserModal] = useState(false)
    let [show, setShow] = useState(false);

    let handleClose = () => setShow(false);
    let handleShow= () => setShow(true);

    useEffect(()=>{

        const closeUserModal = () =>{
            setUserModal(false)
        }

    })

    return(
    <div className="top-header">
        <div className="header-bar d-flex justify-content-between border-bottom">
            <div className="d-flex align-items-center">
                <Link to="#" className="logo-icon">
                    <img src={logoIcon} height="30" className="small" alt=""/>
                    <span className="big">
                        <img src={logoDark} height="22" className="logo-light-mode" alt=""/>
                        <img src={logoLight} height="22" className="logo-dark-mode" alt=""/>
                    </span>
                </Link>
                <Link onClick={()=>setToggle(!toggle)} className="btn btn-icon btn-pills btn-soft-primary ms-2" to="#">
                    <FaBars />
                </Link>
            </div>

            <ul className="list-unstyled mb-0">

                <Offcanvas show={show} onHide={handleClose} placement="end" style={{width:'430px'}}>
                        <Offcanvas.Header closeButton className="offcanvas-header p-4 border-bottom">
                            <h5 id="offcanvasRightLabel" className="mb-0">
                                <img src={logoDark} height="22" className="light-version" alt=""/>
                                <img src={logoLight} height="22" className="dark-version" alt=""/>
                            </h5>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <PersonChatTwo/>
                        </Offcanvas.Body>
                    </Offcanvas>

                <li className="list-inline-item mb-0 ms-1">
                    <div className="dropdown dropdown-primary">
                        <button type="button" className="btn btn-pills btn-soft-primary dropdown-toggle p-0" onClick={()=>setUserModal(!userModal)} ><img src={doctor1} className="avatar avatar-ex-small rounded-circle" alt=""/></button>
                        <div className={`${userModal ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`} style={{minWidth:'200px',position:'absolute', right:'0'}}>
                            <Link className="dropdown-item d-flex align-items-center text-dark" onClick={()=> navProfile()} to="/dr-profile" >
                                <img src={doctor1} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                <div className="flex-1 ms-2">
                                    <span className="d-block mb-1">Arun kumar</span>
                                    <small className="text-muted">Orthopedic</small>
                                </div>
                            </Link>
                            <div className="dropdown-divider border-top"></div>
                            <Link className="dropdown-item text-dark d-flex align-items-center"  onClick={() => logOut()} to="/"><span className="mb-0 d-inline-block me-1"><RiLogoutCircleRLine className="align-middle h6 mb-0"/></span> Logout</Link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}