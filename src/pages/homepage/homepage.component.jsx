import React from 'react'
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SUVs</h1>
                    <h1 className="subtitle">Shop Now</h1>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Sedans</h1>
                    <h1 className="subtitle">Shop Now</h1>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Coupes</h1>
                    <h1 className="subtitle">Shop Now</h1>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Exotics</h1>
                    <h1 className="subtitle">Shop Now</h1>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;