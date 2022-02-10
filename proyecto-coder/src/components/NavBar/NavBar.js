import React from 'react'
import './NavBar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

 

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src='./logofondo.jpg' width='50' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Categorias</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Ofertas</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}



{/* <header className='header'>
            <Link to='/' style={{color: '#FFF'}}>
                <h1>LOGO</h1>
            </Link>

            <nav className="header-nav">
                <Link to='/productos/remeras' className='header-link'>Remeras</Link>
                <Link to='/productos/zapatos' className='header-link'>Zapatos</Link>
                <Link to='/productos/gorros' className='header-link'>Gorros</Link>
            </nav>
            
        </header> */}