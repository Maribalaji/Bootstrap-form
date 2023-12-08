import React, { useContext } from 'react'
import { context } from './Context';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Login(){
    const {setName,setPrice,setQuantity,setDescription,setShowProfile} =useContext(context)

    return(
        <div className='login'>
            <Container className='w-50 m-auto '>
            <Form className='mt-5 p-5'style={{boxShadow:'0 0 5px gray'}}>
                <h2>Product</h2>
                <InputGroup className='mt-5 mb-3'>
                <Form.Control type='text'
                placeholder='Product Name' onChange={(e)=>{setName(e.target.value)}}>

                </Form.Control>
                </InputGroup>
                <InputGroup className='mb-3'>
                 <Form.Control  placeholder='Product Price' onChange={(e)=>{setPrice(e.target.value)}}></Form.Control>

                </InputGroup>
                <InputGroup className='mb-3'>
                 <Form.Control placeholder='Product Quantity' onChange={(e)=>{setQuantity(e.target.value)}}></Form.Control>

                </InputGroup>
                <InputGroup className='mb-3'>
                 <Form.Control placeholder='Product Description' onChange={(e)=>{setDescription(e.target.value)}}></Form.Control>

                </InputGroup>
                <Button variant="danger" onClick={()=>{setShowProfile(true)}}>Submit</Button>{' '}
            </Form>
            
            </Container>
        </div>
    )
}
export default Login