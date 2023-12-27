
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateRoom = () => {
  
    return (
      <>
        <div className="container">
          <h1 className="title block mx-auto">สร้างห้องใหม่</h1>
          
          
          <input className="block" />
          <button className={`primary`} >สร้าง</button>
          <button className={`second`} >
            <Link to="/welcome">กลับ</Link>
          </button>
          
        </div>
      </>
      
    );
  };
  
  export default CreateRoom;