import React,{useState,useEffect} from "react";
import { Link, useLocation } from 'react-router-dom'

import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'
import dr1 from '../assets/images/doctors/01.jpg'

import {FiSettings,GrDashboard, LiaSignOutAltSolid} from '../assets/icons/vander'

export default function Navbar({navDark, containerClass}){

    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);
    let [modal, setModal] = useState(false)



    let [manu , setManu] = useState('');
    let location = useLocation();

    useEffect(() => {

        let current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        setManu(current)

        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
        window.scrollTo(0, 0);
        const closeModal = ()=>{
            setModal(false)
        }
        document.addEventListener("mousedown",closeModal)
        return()=>{
            document.removeEventListener("mousedown",closeModal)
        }
      }, []);

      let toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };
    return(
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} navigation sticky`}>
            <div className={containerClass}>
                <div>
                    {navDark === true ? 
                    <Link className="logo" to="/">
                        <img src={logoDark} height="22" className="logo-light-mode" alt=""/>
                        <img src={logoLight} height="22" className="logo-dark-mode" alt=""/>
                    </Link> :

                    <Link className="logo" to="/" style={{position:'relative',right:'180px'}}>
                        <span className="logo-light-mode">
                            <img src={logoDark} className="l-dark" height="22" alt=""/>
                            <img src={logoLight} className="l-light" height="22" alt=""/>
                        </span>
                        <img src={logoLight} height="22" className="logo-dark-mode" alt=""/>
                    </Link>
                    }
                </div>
        
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#"  className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <ul className="dropdowns list-inline mb-0" style={{position:'relative',left:'185px'}}>

                    <li className="list-inline-item mb-0 ms-1">
                        <Link to="/login">
                        <button className="btn btn-light" style={{color:'#305CCC',fontWeight:'bold'}}> Login</button>
                        </Link>
                    </li>

                    <li  className="list-inline-item mb-0 ms-1">
                        <button className="btn btn-primary" style={{fontWeight:'bold'}}>Sign Up</button>
                    </li>

                    {/* <li className="list-inline-item mb-0 ms-1">
                        <div className="dropdown dropdown-primary">
                            <button type="button" className="btn btn-pills btn-soft-primary dropdown-toggle p-0" onClick={()=>setModal(!modal)}><img src={dr1} className="avatar avatar-ex-small rounded-circle" alt=""/></button>
                            <div className={`${modal === true ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`} style={{minWidth:"200px"}}>
                                <Link className="dropdown-item d-flex align-items-center text-dark" to="/doctor-profile">
                                    <img src={dr1} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <div className="flex-1 ms-2">
                                        <span className="d-block mb-1">Calvin Carlo</span>
                                        <small className="text-muted">Orthopedic</small>
                                    </div>
                                </Link>
                                <Link className="dropdown-item text-dark mb-2" to="/doctor-dashboard"><span className="mb-0 d-inline-block me-1"><GrDashboard className="align-middle h6 mb-0"/></span> Dashboard</Link>
                                <Link className="dropdown-item text-dark" to="/doctor-profile-setting"><span className="mb-0 d-inline-block me-1"><FiSettings className="align-middle h6 mb-0"/></span> Profile Settings</Link>
                                <div className="dropdown-divider border-top"></div>
                                <Link className="dropdown-item text-dark" to="/login"><span className="mb-0 d-inline-block me-1"><LiaSignOutAltSolid className="align-middle h6 mb-0"/></span> Logout</Link>
                            </div>
                        </div>
                    </li> */}
                </ul>


            </div>
        </header>
    )
}