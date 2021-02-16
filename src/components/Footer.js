import React from "react";
import { LABELS_PLAYER } from "../util/StringConstant";

function Footer() {
    return (
        <div id='footer' className='footer-panel'>
            <div className='footer-panel-copyright-text'>
                &copy; MyGuide by Edcast
                <span className='footer-text-separator'>
                    {LABELS_PLAYER.en.separator}
                </span>
                <a id='gss-footer-privacy-policy' target='_blank'>
                    {LABELS_PLAYER.en.privacyPolicy} {LABELS_PLAYER.cookie}
                </a>
                <span className='footer-text-separator'>
                    {LABELS_PLAYER.en.separator}
                </span>
                <a id='gss-footer-terms-of-service' target='_blank'>
                    {LABELS_PLAYER.en.termsOfService}
                </a>
            </div>
        </div>
    );
}

export default Footer;
