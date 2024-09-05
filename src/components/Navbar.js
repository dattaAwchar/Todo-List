import React from 'react'

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme='dark'>
        <div className="container-fluid ">
            <a className="navbar-brand" href="/">{props.title}</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar

