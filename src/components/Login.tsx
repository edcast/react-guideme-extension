import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { LABELS_PLAYER } from "../util/StringConstant";
import * as api from "../api";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        keepLogin: true
    });
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [emailVerified, setEmailVerified] = useState(false);
    let loginCredInvalid = false;

    const sendCallToVerifyEmail = (data: any) => {
        function successCb(res: any) {
            if (!res.data.error) {
                setEmailVerified(true);
            }
        }
        api.verifyEmail(data, "/organization/domain/lookup").then((res) =>
            successCb(res)
        );
    };

    const signIn = () => {
        var data = {
            email_id: user.email,
            password: user.password,
            keep_login: user.keepLogin ? 1 : 0
        };
        api.userSignIn(data, "user/signin").then((res) => {
            console.log(res);
            console.log("Login Successful!");
        });
    };

    const onClickSignin = (e: any) => {
        e.preventDefault();
        if (user.email) {
            var data = {
                email_id: user.email
            };

            if (!emailVerified) {
                sendCallToVerifyEmail(data);
            } else {
                signIn();
            }
        }
    };

    const handleChange = (e: any) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return (
        <div className='gss-container'>
            <Header />
            <div className='ege-panel-main-container gss-signin-page-container gss-overflow gss-overflow-y gss-no-padding'>
                {loginCredInvalid && (
                    <div className='gss-width-100 gss-text-align-center gss-margin-tb-15'>
                        <div className='gss-invalid-log-error-wrapper gss-font-size-14 gss-display-flex gss-align-items-center gss-justify-content-center'>
                            {LABELS_PLAYER.en.invalidLoginCred}
                        </div>
                    </div>
                )}

                <div className='gss-signin-page-wrapper'>
                    <form
                        name='form.signin'
                        noValidate
                        onSubmit={onClickSignin}>
                        <div className='gss-signin-form-container'>
                            <div className='gss-signin-form-input'>
                                <div className='gss-input-email-wrapper gss-margin-tb-10'>
                                    <div className='gss-text-align-left gss-login-field-label'>
                                        {LABELS_PLAYER.en.placeholderEmail}
                                    </div>
                                    <input
                                        id='gss-input-login-email'
                                        className='gss-input-type-text gss-font-size-13 gss-inline-block-vm'
                                        type='email'
                                        placeholder={
                                            LABELS_PLAYER.en.placeholderEmail
                                        }
                                        value={user.email}
                                        name='email'
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className='error-input-wrapper emailid-error-wrapper'>
                                        {LABELS_PLAYER.en.emailError}
                                    </div>
                                </div>
                                {emailVerified && (
                                    <div className='gss-input-password-wrapper gss-margin-tb-10'>
                                        <div className='gss-text-align-left gss-login-field-label'>
                                            {
                                                LABELS_PLAYER.en
                                                    .placeholderPassword
                                            }
                                        </div>
                                        <input
                                            id='gss-input-login-pass'
                                            className='gss-input-type-text gss-font-size-13 ege-inline-block-vm'
                                            type='password'
                                            placeholder={
                                                LABELS_PLAYER.en
                                                    .placeholderPassword
                                            }
                                            value={user.password}
                                            name='password'
                                            required
                                            onChange={handleChange}
                                        />
                                        <div className='error-input-wrapper password-error-wrapper'>
                                            {LABELS_PLAYER.en.passwordError}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className='gss-clear'></div>

                            {emailVerified && (
                                <div className='gss-margin-tb-20 gss-text-align-center'>
                                    <button
                                        id='gss-btn-login-title'
                                        className='gss-btn-default gss-btn-large gss-font-size-16'>
                                        {LABELS_PLAYER.en.loginTitle}
                                    </button>
                                </div>
                            )}

                            {!emailVerified && (
                                <div className='gss-margin-tb-20 gss-text-align-center'>
                                    <button
                                        id='gss-btn-login-next'
                                        className='gss-btn-default gss-btn-large gss-font-size-16'>
                                        Next
                                    </button>
                                </div>
                            )}

                            <div className='gss-float-right gss-options-wrapper gss-single-option-wrapper'>
                                <div className='gss-optional-element-wrapper gss-float-left'>
                                    <input
                                        checked={user.keepLogin}
                                        id='gss-checkbox-login-remember'
                                        className='gss-checkbox gss-float-left gss-input-checkbox-custom'
                                        type='checkbox'
                                        onChange={handleChange}
                                    />
                                    <div className='gss-margin-lr-5 gss-float-left'>
                                        {LABELS_PLAYER.en.remember}
                                    </div>
                                </div>
                                <div
                                    id='gss-label-login-forgot-pass'
                                    className='gss-options-label gss-text-align-center gss-cursor-pointer gss-font-size-15 gss-inline-block-vm'>
                                    {LABELS_PLAYER.en.forgotPass}
                                </div>
                            </div>

                            <div className='gss-clear'></div>

                            {loginCredInvalid && (
                                <div className='gss-margin-tb-10 error-input-wrapper password-error-wrapper active'>
                                    {LABELS_PLAYER.en.accountDisabled}
                                    <span id='gss-label-check-now'>
                                        {LABELS_PLAYER.en.checkNow}
                                    </span>
                                </div>
                            )}
                        </div>
                    </form>

                    <div className='gss-login-page-separator gss-margin-tb-15'>
                        <div className='gss-login-page-separator-inner'>OR</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
