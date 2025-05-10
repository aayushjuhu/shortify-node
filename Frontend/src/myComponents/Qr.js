import React from 'react'

export const Qr = ({qrCode}) => {
    return (
        <div>
            {qrCode?(
            <div className="col-sm-12 text-center">
                <img className="img-fluid" id="qr" src={qrCode} alt="" />
            </div>
            ):""}
        </div>
    )
}
