import React from 'react'
import Wrapper from "../components/wrapper";
import { Link } from "react-router-dom";
import { CityData } from "../data/data";

const City = () => {
  return (
    <Wrapper>
        <div className="container-fluid">
            <div className="layout-specing row">
                <div className="col-xl-12 col-lg-6 col-md-4">
                    <h5 className="mb-0">City</h5>
                    <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                        <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                            <li className="breadcrumb-item"><Link to="/index">VRise</Link></li>
                            <li className="breadcrumb-item"><Link to="/Settings">Settings</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">City</li>
                        </ul>
                    </nav>
                </div>

                <div className="row" style={{height: '512px'}}>
                        <div className="col-8 mt-4">
                            <div className="table-responsive bg-white shadow rounded">
                                <table className="table mb-0 table-center">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3" style={{minWidth:'50px'}}>#</th>
                                            <th className="border-bottom p-3" style={{minWidth:'180px'}}>City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {CityData.map((item, index) =>{
                                            return(
                                                <tr key={index}>
                                                    <th className="p-3">{index + 1}</th>
                                                    <td className="p-3">{item.name}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-7 mt-4">
                            <div className="card border-0 shadow overflow-hidden">
                                <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden mb-0">
                                    <li className="nav-item">
                                        <div className= "active nav-link rounded-0">
                                            <div className="text-center pt-1 pb-1">
                                                <h5 className="mb-0">Add City</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="tab-content" style={{padding: '10px'}}>
                                            <form className="" onSubmit={(event) => event.preventDefault()}>
                                                <div className="col">
                                                    <div className="col-lg-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">City</label>
                                                            <input name="name" id="name" type="text" className="form-control" placeholder=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="row">
                                                    <div className="col-sm-12" style={{textAlign: 'right'}}>
                                                        <input type="button" id="cancel" name="send" className="btn btn-light" value="Cancel"/>
                                                        &nbsp;&nbsp;
                                                        <input type="submit" id="submit" name="send" className="btn btn-primary" value="Save"/>
                                                    </div>
                                                </div>
                                            </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Wrapper>
  )
}

export default City