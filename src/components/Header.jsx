import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div> 
        <MDBNavbar light bgColor='dark'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#' className='text-light'>
       <i className='fa-solid fa-home text-light fs-3 m-2'></i>
       Home
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header