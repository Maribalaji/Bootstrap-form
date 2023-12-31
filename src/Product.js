import React, { useContext } from "react";
import { context } from "./Context";
import Card from 'react-bootstrap/Card';



function Product(){
    const {name,price,quantity,description}=useContext(context)
    return(
        <div>
            <Card className="m-auto mt-5 bg-info text-dark" border="dark" style={{ width: '18rem'}}>
      <Card.Img variant="top" src="image/apple 14.jpg" />
      <Card.Body>
        <Card.Title>Product Details</Card.Title>
        <Card.Text>
        {name}
         </Card.Text>
         <Card.Text>
         {price}
         </Card.Text>
         <Card.Text>
         {quantity}
         </Card.Text>
         <Card.Text>
         {description}
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
    )
}
export default Product