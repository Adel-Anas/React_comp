import React from "react";
import testImg  from "./testImg.png";
import style from "./ImgUrl.css"

function ImgUrl({imgTest}){
    return <img src={testImg} alt="productName" className="logo" />
}

export default ImgUrl;