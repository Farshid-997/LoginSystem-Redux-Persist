import React from 'react';
import { Card,Button } from 'react-bootstrap';
import './ShowBlog.css'
const ShowBlog = ({ blog }) => {
    const { Name, Country, Description} = blog;
    return (
        <div >

{
<Card className="crd" style={{ width: '18rem', backgroundColor:'black'}}>
   


 <Card.Body>
    <Card.Title style={{ color:'gold'  }}>{Name}</Card.Title>
    <Card.Text style={{ color:'gold',fontWeight:'bold'  }}>
    Country is {Country}
    </Card.Text>
    <Card.Text style={{ color:'gold',fontWeight:'bold'  }}>
    {Description}
    </Card.Text>

    
    <Button variant="success">Click Here.</Button>

  
  </Card.Body>
</Card>   }


 

        </div>
    );
};

export default ShowBlog;