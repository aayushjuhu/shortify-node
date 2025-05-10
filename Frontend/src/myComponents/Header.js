import React from 'react'

export const Header = () => {
  let font = { "font-family": "Cal Sans","color":"white" };
  let nav={"height":"10vh"}
  return (
    <div>
      <nav className="navbar" style={nav}>
            <a className="navbar-brand" href="#">
              <h1 style={font}><i className="fa fa-scissors" aria-hidden="true"></i>Shortify</h1>
            </a>
      </nav>
    </div>
  )
}
