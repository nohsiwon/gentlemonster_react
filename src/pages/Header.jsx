import React from "react"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className='header'>
            <div className='headerInner'>
                <Link to={'/'}>
                    <div className='logoBox'>
                        <div className='img'><img src='https://nohsiwon.github.io/gentlemonster_react/img/logo_black.png' alt='' /></div>
                        <div className='logo'>GENTLE MONSTER</div>
                    </div>
                </Link>
                <div className='list'>
                    <Link to={'/sub'}><div className='click'>SUNGLASSES</div></Link>
                    <div>GLASSES</div>
                    <div>COLLABORATION</div>
                    <div>STYLE</div>
                </div>
            </div>
            <div className="loginBox">
                <div>SIGN UP</div>
                <div>LOGIN</div>
            </div>
        </header>
    )
}