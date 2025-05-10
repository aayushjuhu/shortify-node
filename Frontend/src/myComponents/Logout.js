import {useState, React} from 'react'


export const Logout = () => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const handlelogout=async()=>{
        await fetch('http://localhost:8000/user/logout',{
            method:'post',
            credentials:'include'
        });
        setIsLoggedin(false);
        window.location.reload();
    }
    let btn1={
        "--bs-btn-border-color":"white",
        "--bs-btn-color":"white",
        "font-family":"Cal Sans"
    }
    
    return (
        <div>
            <button style={btn1} onClick={handlelogout} type="button" className='btn btn-outline-secondary float-right'>Logout</button>
        </div>
    )
}
