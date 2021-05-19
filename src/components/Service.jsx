import React from "react";
import Sdata from '../Sdata';
import Card from "./Crad";

const Service = () => {
  return (
    <>
      <div className="my5">
        <h1 className="text-center"> Our Serices</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
            {console.log(Sdata)}
              {Sdata.map((val,index)=>{
                return( 
                <Card 
                key={index}
                imgsrc={val.imgsrc} 
                title={val.title} 
                about={val.about}
                visit={val.visit}/>);
              })
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
