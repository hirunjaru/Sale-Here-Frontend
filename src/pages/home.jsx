import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('')
  const [checkInput, setCheckInput] = useState(false);
  
  const data = {name: 'input', id: 123}
  const handleEvent = (e) =>{
    if(e.target.value.length > 0){
      setCheckInput(true)
    }else{
      setCheckInput(false)
    }
    setInput(e.target.value);
    
  }

  const handleNextPage = () => {
    navigate('/welcome', { state: { name: input } });
  }
  return (
    <>
      <div className="container">
        <h1 className="title block mx-auto">ชื่อของคุณ</h1>
        <input className="block" onChange={handleEvent} />
        
          <button className={`primary${checkInput? ' show' : ' hide'}`} onClick={handleNextPage}>ยืนยัน
            {/* <Link to={{
              pathname: "/welcome",
              state:  {data}// your data array of objects
            }}>ยืนยัน</Link> */}
          </button>
      </div>
    </>
    
  )
};

export default Home;