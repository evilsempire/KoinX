import React from "react";
import ReactDOM from "react-dom/client";

import logo from "./assets/logo.jpeg";



const BreadCrumb = () => {
    return (
        <div>
            Cryptocurrencies {">>"} Bitcoin
        </div>
    )
}

const Overview = () => {
    return <div className="overview">
        Overview
    </div>
}

const Promotion = () => {
    return <div className="promotion">
        Promotion
    </div>
}

const Body = () => {
    return (
        <div className="body">
            <BreadCrumb/>
            <div className="container">
                <Overview />
                <Promotion />
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
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

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)