import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavbarStyles.css';
import logo from '../../assets/img/Logo.png';
import useAuth from "../Form/useAuth";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    const { signout } = useAuth();
    const navigate = useNavigate();

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'><img src={logo} alt="Logo" className='icon' /></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {
                    localStorage.getItem('user_token') ?
                        <>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/adote'>Adote</Link>
                            </li>
                            <li>
                                <Link to='/sobre'>Sobre</Link>
                            </li>
                            <li>
                                <Link to='/contato'>Contato</Link>
                            </li>
                            <li>
                                <Link onClick={() => [signout(), window.location.reload(false)]}>Sair</Link>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/adote'>Adote</Link>
                            </li>
                            <li>
                                <Link to='/sobre'>Sobre</Link>
                            </li>
                            <li>
                                <Link to='/contato'>Contato</Link>
                            </li>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>

                        </>
                }
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}

            </div>
        </div>
    )
}

export default Navbar
