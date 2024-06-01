import React from 'react';
import Wrapper from "../components/wrapper";
import { Link } from "react-router-dom";
import { countryData } from "../data/data";
import { GetCountry } from '../page/Utils/services/get';
import { AddCountry } from '../page/Utils/services/post';
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Country = () => {

    //For Data table
    const COLUMNS = [
        {
            name: '#',
            selector: row => row.id
        },
        {
            name: 'Country',
            selector: row => row.country
        },
        {
            name: 'Action',
            selector: 'Action.length',
            maxWidth: '80px',
            sortable: true,
            cell: (row) => {

                return (
                  <div>
                    <FontAwesomeIcon style={{cursor:'pointer'}} icon={faEdit} onClick={()=>(
                        setCountry(row.country),
                        setId(row.id),
                        console.log(row)
                    )} /> {/* Edit icon */}
                    <FontAwesomeIcon style={{cursor:'pointer'}} icon={faTrash} /> {/* Delete icon */}
                  </div>
                );
            },
          }
    ];




    //useState for storing values
    const [Country,setCountry] = useState();
    const [AllCountry,setAllCountry] = useState();
    const [Id,setId] = useState();
    

    //Onload function call
    useEffect(()=>{
        getAllCountry()
    },[])


    //getting all country from a api
    const getAllCountry = async ()=>{
        try{
            let result = await GetCountry();

            setAllCountry(result);
            console.log(result);
        }catch(e){
            console.log(e)
        }
    }

    //saving a new country
    const SaveCountry = async (values)=>{
        try{
                let result = await AddCountry(values);
                console.log(result);
                getAllCountry();

        }catch(e){
            console.log(e);
        }
    }


  return (
    <Wrapper>
        <div className="container-fluid">
            <div className="layout-specing row">
              <div className="col-xl-12 col-lg-6 col-md-4">
                  <h5 className="mb-0">Country</h5>
                  <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                    <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                      <li className="breadcrumb-item"><Link to="/index">VRise</Link></li>
                      <li className="breadcrumb-item"><Link to="/Settings">Settings</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Country</li>
                    </ul>
                    </nav>
                </div>
                <div className="row" style={{height: '512px'}}>
                        <div className="col-8 mt-4">

                            <DataTable
                            columns={COLUMNS}
                            data={AllCountry}
                            pagination  
                            ></DataTable>
                            
                        </div>
                        <div className="col-lg-4 col-md-7 mt-4">
                            <div className="card border-0 shadow overflow-hidden">
                                <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden mb-0">
                                    <li className="nav-item">
                                        <div className= "active nav-link rounded-0">
                                            <div className="text-center pt-1 pb-1">
                                                <h5 className="mb-0">Add Country</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="tab-content" style={{padding: '10px'}}>

                                    <Formik
                                        initialValues={{ country: Country, id: Id}}
                                        enableReinitialize={true}
                                        validationSchema={Yup.object({
                                            country: Yup.string().required('Required')
                                        })}
                                        onSubmit={(values,{resetForm}) => {
                                        // setTimeout(() => {
                                        //     alert(JSON.stringify(values, null, 2));
                                        //     console.log(values)
                                        //     }, 400);
                                        SaveCountry(values);
                                        resetForm()
                                        }}
                                    >
                                        <Form>
                                            <div className="col">
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="country">Country</label>
                                                        <Field  className="form-control" name="country" type="text" />
                                                        <span style={{color:'red',fontSize:'12px'}}>
                                                        <ErrorMessage name="country" />
                                                        </span>

                                                        <Field  className="form-control" name="id" type="text" hidden />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-12" style={{textAlign: 'right'}}>
                                                    <input type="button" id="cancel" name="send" className="btn btn-light" value="Cancel" />
                                                        &nbsp;&nbsp;
                                                    <input type="submit" id="submit" name="send" className="btn btn-primary" value="Save"/>
                                                </div>
                                            </div>
                                        
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Country