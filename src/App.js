import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [user, setuser] = useState([])
  const getuserdata = async () => {
    try{
      const res = await fetch("https://api.github.com/users");
      setuser(await res.json());
    }catch(error){
console.log(error);
    }
  }
  useEffect(() => {
    getuserdata()
  }, [])
  return (
    <>
    <div className="container-fluid">

    
   <div className="container-fluid" style={{display:"flex",width:"90%" ,height:"auto", margin:"0 auto",flexWrap:"wrap", paddingTop:"3rem"}}>

      {
        user.map((cur) => {
          return (
            
              <div className="card" style={{ width: "19rem", margin:"0.5rem" }} key={cur.id}>
                <img src={cur.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{`userName : ${cur.login}`}</h4>
                  <h6 className="card-text"><a href={cur.html_url} target="blank">Profile</a></h6>
                  <p className="card-text">{`Type : ${cur.type}`}</p>         
                </div>
              </div>


              )
})
   

   
}
   </div>
   </div>
</>
          )
        }

export default App






