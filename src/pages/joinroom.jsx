import { Link } from "react-router-dom";

const Joinroom = () => {
    return (
        <>
            <div className="container">
                <h1 className="title block mx-auto">เข้าร่วมแชท</h1>
                
                
                <input className="block" />
                <button className={`primary`} >
                    <Link to="/welcome">เข้าร่วม</Link>
                </button>
                <button className={`second`} >
                    <Link to="/welcome">กลับ</Link>
                </button>
            
            </div>
      </>
        
    )
  };
  
  export default Joinroom;