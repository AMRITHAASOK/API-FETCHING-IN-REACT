import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
import Cards from './Cards';
function Main() {
    //1 define ur base_url 
    const base_url ='https://dummyjson.com/products';

    //3 create a state for holding array data
    const [arrayData,setArrayData]=useState([])

    //2 create a function for api call
    const api_function = async()=>{
        const response = await fetch(base_url)
        .then(res=>res.json())//json -> array conversion
         .then(data=>setArrayData(data.products))//array data set to the state
    }
    useEffect(()=>{
        api_function()
    },[])

    console.log(arrayData);

  return (
    <div>
        {
            <Cards product={arrayData}/>
        }

        
    </div>
  )
}

export default Main