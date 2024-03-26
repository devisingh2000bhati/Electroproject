import React from 'react';
import "./blog.css";
import b1 from "../img/blog/b1.jpg";
import b2 from "../img/blog/b2.jpg";
import b3 from "../img/blog/b3.jpg";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function Blog() {
  return (

    <>
      <div className="container dav">
    
        <h2 className='m-5'>featured products</h2>
    

        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
              <img alt={b1} src={b1} />
              <CardBody>
                <CardTitle tag="h5">Why Brands are Looking at Local Language</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">By Robert Norby / 18th March 2018</CardSubtitle>
                <CardText className='text-black'>
                  Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
              <img alt={b2} src={b2} />
              <CardBody>
                <CardTitle tag="h5">Why Brands are Looking at Local Language</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">By Robert Norby / 18th March 2018</CardSubtitle>
                <CardText className='text-black' >
                  Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
              <img alt={b3} src={b3} />
              <CardBody>
                <CardTitle tag="h5">Why Brands are Looking at Local Language</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">By Robert Norby / 18th March 2018</CardSubtitle>
                <CardText className='text-black' >
                  Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
