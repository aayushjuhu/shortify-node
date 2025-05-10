import './App.css';
import { useState,useEffect } from 'react';
import { Header } from "./myComponents/Header";
import { UrlBox } from "./myComponents/UrlBox";
import { Footer } from "./myComponents/Footer";
import { Auth } from "./myComponents/auth";
import { Hero } from "./myComponents/Hero";
import { AllLinks } from "./myComponents/AllLinks";
import { Logout } from "./myComponents/Logout";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  // const [resName, setresName] = useState("");
  useEffect(()=>{
    const checkauth = async ()=>{
      try {
        const response = await fetch('http://localhost:8000/verify/auth',{
          method:'get',
          credentials:'include',
        });
        const result = await response.json();
        
        if(result.state==='true'){
          setIsLoggedin(true);
          // setresName(result.name);
        }
      } catch (error) {
        setIsLoggedin(false);
      }
    }
    checkauth();
  },[]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10">
            <Header/>
          </div>
          <div className="col-sm-2 mt-3">
            {isLoggedin ?(<><Logout/></>):""}
          </div>
        </div>
      </div>
      {isLoggedin ?(<><Hero/><UrlBox/><AllLinks/></>):(<Auth setIsLoggedin={setIsLoggedin}/> )}
      <Footer/>
    </>
  );
}

export default App;
