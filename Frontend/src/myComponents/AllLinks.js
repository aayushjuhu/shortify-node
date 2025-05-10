import {useEffect, React, useState} from 'react'

export const AllLinks = () => {
    let i= 0;
    const [list,setList] = useState([])
    let tableStyle = {
        "--bs-table-bg":"rgba(19,19,20,255)",
        "--bs-table-color":"white", 
        "font-family":"Cal Sans",
        // "--bs-table-border-color":"white"
    }
    useEffect(()=>{
            const getAllLinks = async ()=>{
                const res = await fetch("http://localhost:8000/links/all",{
                    method: 'get',
                    credentials:'include',
                });
                const result = await res.json();
                console.log(result);
                setList(result);
            }
            getAllLinks();
        },[])
    
    

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm-12 text-center mt-4">
                    <h2 style={{"font-family":"Cal Sans"}}>Your Links</h2>
                    <table class="table mt-4" style={tableStyle}>
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Short URL</th>
                                <th scope="col">Redirect URL</th>
                                <th scope="col">QR Code</th>
                            </tr>
                        </thead>
                        <tbody>
                                {list.map((link,index)=>(
                                    <tr key={index}>
                                        <td>{i+1}</td>
                                        <td><a href="http://localhost:8000/{link.shortId}"></a>http://localhost:8000/{link.shortId}</td>
                                        <td>{link.redirectURL}</td>
                                        <td><img src={link.qr} alt="qr" /></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
