import React from 'react'
import '../App.css'

export const ShortUrl = ({shortUrl}) => {
    let btn1={
        "--bs-btn-border-color":"white",
        "--bs-btn-color":"white",
        "font-family":"Cal Sans"
    }
    function copyurl() {
        var surl = document.getElementById("urlbx1");
        if (surl.value !== "") {
            console.log(surl.value);
            surl.select();
            surl.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(surl.value);
            alert("Link Copied to Clipboard!");
        }
        else {
            alert("Enter URL");
        }
    }

    return (
        <div className='container-fluid'>
            <div style={{display:'flex', justifyContent:"center"}}>

            <div className="input-group mb-4" style={{width: "50vw",}}>
                <input readOnly type="url" value={shortUrl} id="urlbx1" name="urlbx" className="form-control"
                    placeholder="Your Short URL will appear here" aria-label="Recipient's username"
                    aria-describedby="btn1" />
                <button style={btn1} onClick={copyurl} className="btn btn-outline-secondary" type="button" id="btn2">Copy</button>
            </div>
            </div>
        </div>
    )
}
