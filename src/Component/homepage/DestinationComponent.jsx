import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import mumbai from '../homepage/images/mumbai.jpg';
import goa from '../homepage/images/goa.jpg';
import bangalore from '../homepage/images/bangalore.webp';
import delhi from '../homepage/images/delhi.avif';
import jaipur from '../homepage/images/jaipur.avif';
import dubai from '../homepage/images/dubai.avif';
import udaipur from '../homepage/images/udaipur.avif';
import pune from '../homepage/images/pune.jpg' ;
import maldives from '../homepage/images/maldives.webp'
import pondicherry from '../homepage/images/pondicherry.avif'


const DestinationComponent = () => {

  
  return (
    <div>
      <div className="text-center" style={{fontFamily:'initial'}}>
        <h3>Choose Your Destination</h3>
      </div>
      
      <div >
      
      <Carousel  style={{cursor:'pointer'}} indicators={false} controls={true}>
      
        <Carousel.Item>
          <div className="d-flex justify-content-center gap-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img  src={mumbai} />
              <Card.Body>
                <Card.Title >Mumbai</Card.Title>
                <h5>Avg.&#8377;4006</h5>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pune} />
              <Card.Body>
                <Card.Title>Pune</Card.Title>
                <h5>Avg.&#8377;3846</h5>
              </Card.Body>
            </Card>

            <Card style={{ width: '16.5rem' }}>
              <Card.Img variant="top" src={goa} />
              <Card.Body>
                <Card.Title>Goa</Card.Title>
                <h5>Avg.&#8377;3586</h5>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={bangalore} />
              <Card.Body>
                <Card.Title>Bangalore</Card.Title>
                <h5>Avg.&#8377;3345</h5>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={jaipur} />
              <Card.Body>
                <Card.Title>Jaipur</Card.Title>
                <h5>Avg.&#8377;3058</h5>
              </Card.Body>
            </Card>
            
            
            </div>
        </Carousel.Item>
      

       
        <Carousel.Item>
          <div className="d-flex justify-content-center gap-3">
           
            
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={maldives} />
              <Card.Body>
                <Card.Title>Maldives</Card.Title>
                <h5>Avg.&#8377;3058</h5>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={dubai} />
              <Card.Body>
                <Card.Title>Dubai</Card.Title>
                <h5>Avg.&#8377;4215</h5>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={udaipur} />
              <Card.Body>
                <Card.Title>Udaipur</Card.Title>
                <h5>Avg.&#8377;3045</h5>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={delhi} />
              <Card.Body>
                <Card.Title>Delhi</Card.Title>
                <h5>Avg.&#8377;3812</h5>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pondicherry} />
              <Card.Body>
                <Card.Title>Pondicherry</Card.Title>
                <h5>Avg.&#8377;3812</h5>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
    </div>
  );
};

export default DestinationComponent;











