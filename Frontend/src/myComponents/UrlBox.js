import React, { useState } from 'react'
import { ShortUrl } from './ShortUrl';
import { Qr } from './Qr';
import '../App.css'

export const UrlBox = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShorturl] = useState("");
    const [qrCode, setQrCode] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/", {
                method: 'post',
                credentials:'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url })
            });
            const result = await response.json();
            setShorturl("http://localhost:8000/" + result.shortid);
            setQrCode(result.qrurl)
        } catch (error) {
            console.log("Error: ", error);
        }
    };
    
    // let urlbx = {
    //     "margin": "0 auto",
    //     "align-content": "center",
    //     "width": "50vw",
    //     "background-color":"rgba(19,19,20,255)",
    //     "color":"white",
    // }
    let btn1={
        "--bs-btn-border-color":"white",
        "--bs-btn-color":"white",
        "font-family":"Cal Sans"
    }
    
return (
    <div className='container-fluid mt-2'>
        <div className="urlbox">
            <form onSubmit={handleSubmit}>
                <div className="col-sm-12" style={{display:'flex', justifyContent:"center"}}>

                <div className="input-group mb-3" style={{width: "50vw",}}>
                    <input type="url"  required id="urlbx" value={url} onChange={(e) => setUrl(e.target.value)} name="urlbx" className="form-control w-50" placeholder="Enter URL*"
                        aria-label="Recipient's username" aria-describedby="btn1" />
                    <button style={btn1}  className="btn btn-outline-secondary" type="submit" id="btn1">Shortify!</button>
                </div>
                </div>
            </form>
            <ShortUrl shortUrl={shortUrl} />
            <Qr qrCode={qrCode} />
        </div>
    </div>
)
}

