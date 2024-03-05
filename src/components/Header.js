import React from "react";
const Header = () => {
    return (
        <div className="header border-black">
            <div className="logo-container">
                <img className="logo" src={logo} width={100}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Crypto Taxes</li>
                    <li>Free Tools</li>
                    <li>Resource Center</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;