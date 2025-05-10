import {useEffect,useState, React} from 'react'

export const Hero = () => {
    const [resName, setresName] = useState("");
    let herostyle={"font-family":"Cal Sans"}
    useEffect(()=>{
        const getUserName = async ()=>{
            const res = await fetch("http://localhost:8000/verify/auth",{
                method: 'get',
                credentials:'include',
            });
            const result = await res.json();
            setresName(result.name);
        }
        getUserName();
    },[])
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h2 style={herostyle}>Hi {resName} !</h2>
                    <h4>Start shortening your links now.</h4>
                </div>
            </div>
        </div>
    )
}
