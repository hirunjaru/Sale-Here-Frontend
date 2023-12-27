
import React, { useState, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

const Welcome = () => {
    const location = useLocation();
    const { state } = location;
    // const { state } = props.location
    // const data = state && state.data ? state.data : null;
    // console.log(state)
    const titleRef = useRef(null);

    return (
      <>
        <div className="container">
            { state && (
                <h1 className="title block mx-auto">คุณ {state.name}</h1>
            )}
            
            <button className={`primary`}>
                <Link to="/createroom">สร้างห้องใหม่</Link>
            </button>
            <button className={`second`}>
                <Link to="/joinroom">เข้าร่วมแชท</Link>
            </button>
        </div>
      </>
      
    );
  };
  
  export default Welcome;