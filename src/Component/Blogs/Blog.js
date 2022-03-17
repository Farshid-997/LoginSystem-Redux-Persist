import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowBlog from './ShowBlog';
import './Blog.css'
const Blog = () => {
    const [blogs,setBlog]=useState([])
    useEffect(()=>{
        fetch('list.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div>
          
            <h1 className="blogs">  <span style={{color:'red',marginTop:'20px'}}>This</span>  is  our blogs</h1>
            <hr className='w-50 mx-auto mb-2 mt-0' style={{borderTop:'2px dotted red'}} />
                <Container >
                <Row xs={1} sm={1} md={2} lg={3} className="g-5" style={{marginLeft:'5px',paddingLeft:'5px'}}>
                {
                                       blogs.map(blog=> <ShowBlog
                                        key={blog.id}
                                        blog={blog}
                                    ></ShowBlog>)
                                }
                
                </Row>
              

                    </Container>
            
        </div>
    );
};

export default Blog;