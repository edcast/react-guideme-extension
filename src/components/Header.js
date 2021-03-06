import React from "react";
import { ReactComponent as LoginHeader } from "./../assets/svg/LoginHeader.svg";
import LogoAdmin from "../assets/images/logo-admin.png";

function Header() {
    return (
        <div className='gss-header-banner-wrapper gss-position-relative'>
            <div className='gss-inline-block-vm'>
                <LoginHeader />
            </div>
            <img
                // src={LogoAdmin}
                arl='logo-admin'
                id='gss-header-widget-icon'
                className='gss-header-widget-icon'
            />
        </div>
    );
}

export default Header;
