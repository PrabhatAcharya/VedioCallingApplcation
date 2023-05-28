import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const[roomCode , setroomCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/room/${roomCode}`)
  }
//   const myStyle={
//         backgroundImage: 
//  "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
//         height:'100vh',
//         marginTop:'-70px',
//         fontSize:'50px',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//     };

  return (
    <div>
      <form style={{margin : "20% 0 25%  0" }} onSubmit={handleSubmit}>
        <div>
          <label style={{color : "black" , fontSize : "30px"}}>Enter Room Code</label>
          <input
            value={roomCode}
            onChange={(e) => setroomCode(e.target.value)}
            placeholder="Enter Room Code"
            type="text"
            style={{padding : "0.8%",   border : "none" , width : "30% ", marginLeft:"20px" ,textAlign:"center" , borderRadius:"10px"}}
          />
        </div>
        <button type="submit" style ={{marginTop:"4%" , width:"15%" , padding:"15px 32px" , fontSize:"16px" , cursor:"pointer" , backgroundColor : "seagreen" , color:"white" , marginLeft : "14%", border : "none" , borderRadius:"10px"}} >Enter Room</button>
      </form>
    </div>
  );
}

export default HomePage
