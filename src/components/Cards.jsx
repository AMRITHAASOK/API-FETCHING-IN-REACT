import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
function Cards({product}) {
    console.log(product);
  return (
    <div>
         <div className="row">
                {
                   product.map(product=>(
                        <div className="col m-3">
                            <MDBCard style={{width:'300px',height:'400px'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={product.thumbnail} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
         <h3>Product Name : {product.title}</h3>
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
                        </div>
                    ))
                }
        </div> 
    </div>
  )
}

export default Cards