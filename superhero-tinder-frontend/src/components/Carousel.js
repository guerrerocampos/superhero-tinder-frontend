import { UncontrolledCarousel, Row, Col } from "reactstrap";


const items = [
    {
      src: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.18169-9/14906823_1259273140759584_982851449159037975_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=YJRhfPdTHTMAX-shUnB&_nc_ht=scontent-lax3-1.xx&oh=107da678e8c8fadbbef407d906e3ddf9&oe=6149D4D9',
      altText: 'JokerGuy2012',
      caption: 'Looking for my Harley Quinn',
      header: 'JokerGuy2012',
      key: '1'
    },
    {
      src: 'https://i.pinimg.com/originals/b6/1f/20/b61f20e107a7a0985ebf890712f2b0f2.jpg',
      altText: 'BatDad4000',
      caption: 'I will drive you bat crazy',
      header: 'BatDad4000',
      key: '2'
    },
    {
      src: 'https://i.pinimg.com/736x/ac/fc/94/acfc9428205432697c2ba69e65cf81f7.jpg',
      altText: 'The_Real_Batman',
      caption: `I'm as real as they get`,
      header: 'The_Real_Batman',
      key: '3'
    }
  ];

  const carouselImages = () => (
    <Row>
      <Col md="8" className="mx-auto">
        <UncontrolledCarousel items={items} />
      </Col>
    </Row>
  );
  
  export default carouselImages;