import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Navbar } from "./Navbar";
import '../styles/page.css';

export class Page extends Component {
    render() {
        return (
            <div className='main'>
                <Navbar></Navbar>
                <div className="categoria-area">
                    <div className="container">
                        <h2>Categoria</h2>
                        <p>Celular</p>
                    </div>
                </div>
                <div className='produtos-area'>

                </div>
            </div>
        );
    }
}

export default Page;