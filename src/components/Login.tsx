import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { LABELS_PLAYER } from "../util/StringConstant";

function Login() {
    return (
        <div className="gss-container" >
            <Header />
            <div className="ege-panel-main-container gss-signin-page-container gss-overflow gss-overflow-y gss-no-padding">

                <div className="gss-width-100 gss-text-align-center gss-margin-tb-15" 
                    ng-if="$root.loginInvalidCred">
                    <div className="gss-invalid-log-error-wrapper gss-font-size-14 gss-display-flex gss-align-items-center gss-justify-content-center">
                        {LABELS_PLAYER.en.invalidLoginCred}
                    </div>
                </div>

                <div className='gss-signin-page-wrapper'>
                    <form name="form.signin" 
                        ng-submit='onClickSignin(form.signin.$valid)'>
                        
                        <div className='gss-signin-form-container'>
                            <div className='gss-signin-form-input'>
                                <div className="gss-input-email-wrapper gss-margin-tb-10">
                                    <div className="gss-text-align-left gss-login-field-label">{LABELS_PLAYER.en.placeholderEmail}</div>
                                    <input id="gss-input-login-email" className='gss-input-type-text gss-font-size-13 gss-inline-block-vm' type='email' 
                                    placeholder={LABELS_PLAYER.en.placeholderEmail}
                                    ng-pattern="/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/" 
                                    name="email" 
                                    ng-focus="error.emailRequired=false;$root.loginInvalidCred=false;" ng-disabled="disableLogin || (emailVerified && smbUser)" required />
                                    <div className='error-input-wrapper emailid-error-wrapper' ng-className="{'active': error.emailRequired}">{LABELS_PLAYER.en.emailError}</div>
                                </div>
                                <div className="gss-input-password-wrapper gss-margin-tb-10">
                                    <div className="gss-text-align-left gss-login-field-label">{LABELS_PLAYER.en.placeholderPassword}</div>
                                    <input id="gss-input-login-pass" className='gss-input-type-text gss-font-size-13 ege-inline-block-vm' type='password' 
                                    placeholder={LABELS_PLAYER.en.placeholderPassword} 
                                    ng-model="user.password" name="password" required 
                                    ng-focus="error.passwordRequired=false;$root.loginInvalidCred=false" ng-disabled="disableLogin"/>
                                    <div className='error-input-wrapper password-error-wrapper'>{LABELS_PLAYER.en.passwordError}</div>
                                </div>
                            </div>

                            <div className="gss-clear"></div>

                            <div className="gss-margin-tb-20 gss-text-align-center">
                                <button id="gss-btn-login-title" className='gss-btn-default gss-btn-large gss-font-size-16' 
                                >{LABELS_PLAYER.en.loginTitle}</button>
                            </div>

                            <div className="gss-margin-tb-20 gss-text-align-center">
                                <button id="gss-btn-login-next" className='gss-btn-default gss-btn-large gss-font-size-16' 
                                ng-disabled="disableLogin">Next</button>
                            </div>

                            <div className='gss-float-right gss-options-wrapper gss-single-option-wrapper'>
                                <div className='gss-optional-element-wrapper gss-float-left' 
                                    >
                                    <input id="gss-checkbox-login-remember" className='gss-checkbox gss-float-left gss-input-checkbox-custom' 
                                        type='checkbox'
                                        />
                                    <div className='gss-margin-lr-5 gss-float-left'>{LABELS_PLAYER.en.remember}</div>
                                </div>
                                <div id="gss-label-login-forgot-pass" className='gss-options-label gss-text-align-center gss-cursor-pointer gss-font-size-15 gss-inline-block-vm'>
                                        {LABELS_PLAYER.en.forgotPass}
                                </div>
                            </div>

                            <div className="gss-clear"></div>

                            <div className='gss-margin-tb-10 error-input-wrapper password-error-wrapper active'>{ LABELS_PLAYER.en.accountDisabled }
                                <span id="gss-label-check-now">{LABELS_PLAYER.en.checkNow}</span>
                            </div>  
                        </div>
                    </form>

                    <div className="gss-login-page-separator gss-margin-tb-15">
                        <div className="gss-login-page-separator-inner">OR</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;
