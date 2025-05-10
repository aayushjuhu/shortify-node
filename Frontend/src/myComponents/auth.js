import React, { useState} from 'react'


export const Auth = ({setIsLoggedin}) => {
    const [Name,setName] = useState('')
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handlesignup= async (e)=>{
        e.preventDefault();
        try {
            await fetch('http://localhost:8000/user/signup',{
                method:"post",
                
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({"name":Name,"email":Email, "password":Password})
            });
            // const result = await response.json();
            
        } catch (error) {
            console.log("Sign up Error",error)
            alert("Sign Up Error. Please Try Again!")
        }

    }
    
    
    const handlelogin= async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/user/signin',{
                method:"post",
                credentials:'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({"email":Email, "password":Password})
            });
            const result = await response.json();
            if(result.state==="true"){
                setIsLoggedin(true);
            }
        } catch (error) {
            alert('Please check your email and password!')
        }

    }
    let authcontainer= {
        "width":"25vw",
        "margin": "50px auto",
        "padding": "20px",
        "text-align": "center",
        "background": "rgba(196, 196, 196, 0.155)",
        "border": "1px solid rgba(196, 196, 196, 0.309)",
        "border-radius": "10px",
        "box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.1)"
    }
    return (
        <><div>
            <div className="auth-container" style={authcontainer}>
                <div className="row">

                    <div className="col-sm-12">
                        <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="login-tab" data-bs-toggle="pill" data-bs-target="#login"
                                    type="button" role="tab">Sign-in</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="register-tab" data-bs-toggle="pill" data-bs-target="#register"
                                    type="button" role="tab">Sign-up</button>
                            </li>
                        </ul>

                        {/* <!-- Tab Content --> */}
                        <div className="tab-content">
                            {/* <!-- Login Form --> */}
                            <div className="tab-pane fade show active" id="login" role="tabpanel">
                                <form onSubmit={handlelogin}>
                                    <div className="mb-3">
                                        <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control" name="email" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" name="password"
                                            required />
                                    </div>
                                    <button id="btn1" type="submit" className="btn btn-outline-primary w-100">Sign-in</button>
                                </form>
                            </div>

                            {/* <!-- Register Form --> */}
                            <div className="tab-pane fade" id="register" role="tabpanel">
                                <form onSubmit={handlesignup}>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} className="form-control" name="name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control" name="email" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} className="form-control" name="password"
                                            required />
                                    </div>
                                    <button id="btn2" type="submit" className="btn btn-outline-primary w-100">Sign-up</button>

                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Tabs --> */}

                </div>
            </div>
        </div></>
    )
}
