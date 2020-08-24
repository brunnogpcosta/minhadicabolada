import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import { FiInstagram } from 'react-icons/fi';

import './Header.css'

function Header() {
    
        return (
            <div className="header-content">
                <div className="header-top">

            
                        <ul>
                            <li><a href="/" className="link-style">DB</a></li>
                            <li><a href="/sobre" className="link-style">Dica Bolada</a></li>
                            <li><a href="" className="link-style"><FiInstagram className="icon" /></a></li>
                        </ul>
            


                </div>
                <div className="header-bottom">
                    <ul>
                        <li><a href="">Udemy</a></li>
                        <li><a href=""></a></li>
                        <li><a href="">Autores</a></li>
                        <li><a href="">Free</a></li>
                        <li><a href="">Outros</a></li>

                    </ul>


                </div>

            </div>

        )
    }

export default Header;