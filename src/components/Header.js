import React from 'react'

function Header() {
    return (
        <div class="gss-header-banner-wrapper gss-position-relative">
            <div class="gss-inline-block-vm" ng-include="$root.getBasePath('common/img/login_header.svg')">
            </div>
            <img id="gss-header-widget-icon" class="gss-header-widget-icon"/>
        </div>
    )
}

export default Header;
