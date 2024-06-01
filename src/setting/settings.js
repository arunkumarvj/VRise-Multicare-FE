import React from 'react';
import Wrapper from "../components/wrapper";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <Wrapper>
        <div className="container-fluid">
            <div className="layout-specing">
                <div className="col-xl-12 col-lg-6 col-md-4">
                    <h5 className="mb-0">Settings</h5>
                    <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                        <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                            <li className="breadcrumb-item"><Link to="/index">VRise</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Settings</li>
                        </ul>
                    </nav>
                </div>
                <div className='row'>
                <div className="col-lg-3 col-md-7 mt-4">
                    <div className="card border-0 shadow overflow-hidden">
                    <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden mb-0">
                            <li className="nav-item">
                                <Link to="/Settings/City" className= "active nav-link rounded-0">
                                    <div className="text-center pt-1 pb-1">
                                        <h5 className="mb-0">City</h5>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content" style={{padding: '10px'}}>
                            <div className="tab-pane fade show active" style={{textAlign: 'center',height: '80px'}}>
                                <p className="mb-0">Add City for the registration</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-7 mt-4">
                    <div className="card border-0 shadow overflow-hidden">
                    <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden mb-0">
                            <li className="nav-item">
                                <Link to="/Settings/District" className= "active nav-link rounded-0">
                                    <div className="text-center pt-1 pb-1">
                                        <h5 className="mb-0">District</h5>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content" style={{padding: '10px'}}>
                            <div className="tab-pane fade show active" style={{textAlign: 'center',height: '80px'}}>
                                <p className="mb-0">Add District for the registration</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-7 mt-4">
                    <div className="card border-0 shadow overflow-hidden">
                    <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden mb-0">
                            <li className="nav-item">
                                <Link to="/Settings/State" className= "active nav-link rounded-0">
                                    <div className="text-center pt-1 pb-1">
                                        <h5 className="mb-0">State</h5>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content" style={{padding: '10px'}}>
                            <div className="tab-pane fade show active" style={{textAlign: 'center',height: '80px'}}>
                                <p className="mb-0">Add State for the registration</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-7 mt-4">
                    <div className="card border-0 shadow overflow-hidden">
                    <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden mb-0">
                            <li className="nav-item">
                                <Link to="/Settings/Country" className= "active nav-link rounded-0">
                                    <div className="text-center pt-1 pb-1">
                                        <h5 className="mb-0">Country</h5>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content" style={{padding: '10px'}}>
                            <div className="tab-pane fade show active" style={{textAlign: 'center',height: '80px'}}>
                                <p className="mb-0">Add Country for the registration</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </Wrapper>
  )
}

export default Settings