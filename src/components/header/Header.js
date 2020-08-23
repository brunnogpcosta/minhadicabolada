import React, { Component } from 'react'

import { FiInstagram } from 'react-icons/fi';

import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header-content">
                <div className="header-top">
                    <ul>
                        <li><a href="">Logo</a></li>
                        <li><a href="">Dica Bolada</a></li>
                        <li><a href=""><FiInstagram className="icon"/></a></li>


                    </ul>

                </div>
                <div className="header-bottom">
                    <ul>
                        <li><a href="">Cursos</a></li>
                        <li><a href="">Categorias</a></li>
                        <li><a href="">Autores</a></li>
                        <li><a href="">Free</a></li>
                        <li><a href="">Outros</a></li>

                    </ul>


                </div>

            </div>

        )
    }
}

export default Header;