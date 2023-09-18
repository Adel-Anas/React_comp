import React from "react";
import productInfo from "./productInfo";
import Name from "./Name";
import Description from "./Description";
import Price from "./Price";
import ImgUrl from "./ImgUrl";
import {Card} from "react-bootstrap";
import imageTest from "./testImg.png"
import style from "./App.css"

function App(){
  const firstName = "Anas";

  return (
    <div className="App">
      <Card>
        <ImgUrl testImg={productInfo.imgUrl} />
        <Card.Body>
          <Name info={productInfo.name} />
          <Price xrice={productInfo.price} />
          <Description desc={productInfo.description} />
        </Card.Body>
      </Card>
      <div className="message">
        {firstName 

          ? <p className="greetings">Hello, {firstName}!</p> 
          : <p className="greetings">Hello, there!</p>}

        {firstName && <img src={imageTest} alt={firstName} className="footer_img"/>}
        
      </div>
    </div>
  );
}

export default App;