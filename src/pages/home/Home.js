import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Home.css';
import Pessoa from './foto-pessoa.jpg'

class Home extends Component {
    render() {
        return (
            <div className="home-content">


                <div className="wrapper">
                    <div className="meu-card">
                        <figure className="figure">
                            <img src={Pessoa} />
                            <figcaption className="figcaption">
                                <p className="fig-title">Curso de Java</p>
                                <p>Curso completo de desenvolvimento Java.</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="meu-card">
                        <figure className="figure">
                            <img src={Pessoa} />
                            <figcaption className="figcaption">
                                <p className="fig-title">Curso de Java</p>
                                <p>Curso completo de desenvolvimento Java.</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="meu-card">
                        <figure className="figure">
                            <img src={Pessoa} />
                            <figcaption className="figcaption">
                                <p className="fig-title">Curso de Java</p>
                                <p>Curso completo de desenvolvimento Java.</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="meu-card">
                        <figure className="figure">
                            <img src={Pessoa} />
                            <figcaption className="figcaption">
                                <p className="fig-title">Curso de Java</p>
                                <p>Curso completo de desenvolvimento Java.</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="meu-card">
                        <figure className="figure">
                            <img src={Pessoa} />
                            <figcaption className="figcaption">
                                <p className="fig-title">Curso de Java</p>
                                <p>Curso completo de desenvolvimento Java.</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="meu-card">
                        <figure className="figure">
                            <img src={Pessoa} />
                            <figcaption className="figcaption">
                                <p className="fig-title">Curso de Java</p>
                                <p>Curso completo de desenvolvimento Java.</p>
                            </figcaption>
                        </figure>
                    </div>


                </div>

            </div >
        )
    }
}

export default Home;