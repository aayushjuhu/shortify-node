import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "100vh",
        width: "100%"
      }
      let date= new Date().getFullYear();
  return (
    <div>
        <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; {date} <br /> Shortify.com
      </p>
    </footer>
    </div>
  )
}
