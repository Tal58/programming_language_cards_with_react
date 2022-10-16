import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useState } from "react";

const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(true);
  console.log(showDesc);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-2 h-100 lang-card"
      onClick={() => setShowDesc(!showDesc)}
      type= "button"
    >
      {showDesc === true ? <Container>
        <Image className="lang-logo" src={img} width="60%" height="75vh"></Image>
        <h3 className="display-6"><b>{name}</b></h3>
      </Container> :   <ul className="h-100 flex-row align-items-center ">
        {options.map((item, key) => {
          return <li className="h6 text-start" key={key}>{item}</li>;
        })}
      </ul> }  
   
    </Container>
  );
};

export default Language;
