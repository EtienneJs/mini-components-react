import React, { useEffect, useState } from "react";
import './style.css'
import dataJson from './data.json';
import { SlidersInterface } from "./interface";

export const ExpandingCards = () => {
  
  const [dataSlider, setData] = useState<SlidersInterface>(dataJson);
  const handleOnclick = (id:number):void =>{
    const cleanClass = dataSlider.data.map(x => ({
      ...x,
      className: x.id === id && !(x.className === 'panel active') ? 'panel active' : 'panel'
    }));
    setData({"data":cleanClass});      
  }
  return (
  <figure className="body">
        <div className="container">
      {
        dataSlider.data?.map(slide=>(
          <div
          key={slide.id}
          className={slide.className}
          style={{backgroundImage: slide.url}}
          onClick={()=>handleOnclick(slide.id)}
        >
          <h3>{slide.h3}</h3>
        </div>
        ))
      }
    </div>
  </figure>
  );
};
