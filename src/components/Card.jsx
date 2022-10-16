import Language from "./Language";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Languages} from "../helper/data";

const Card = () => {
  return (
    <Container className="rounded-4 mt-4 p-4" style={{background: "#f48b29"}}>
      <h1 className="text-light my-2 ">Language</h1>
      <Row className="gap-3 justify-content-center">
      {Languages.map((lang,key)=>{
         return (
      <Col sm={6} md={4} lg={3} key={key}>
      <Language {...lang} />
      </Col>)
            })}
      </Row>  
    </Container>
  );
};

export default Card;
