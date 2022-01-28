import React, { useState } from "react";
import { authService, firebaseInstance } from "fbase";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        // console.log("event: ", event);
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
        console.log(event)
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(
                    email, password
                );
            } else {
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        const provider = new firebaseInstance.auth.FacebookAuthProvider();
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    }
    // const toggleAccount = () => setNewAccount((prev) => !prev);
    return (
<>
    <div className="loginSignBgColor">
        <h1 className="logoSize instagramLogoBgPosition combinedImages">img</h1>
        <div className="loginInputSize">
            <form className="formSection" id="loginForm" method="post" onSubmit={onSubmit}>
                <div className="mainFootTopAjust">
                    <div className="idPwSize">
                        <div className="idPwInputAjust">
                            <label className="idPwLabelAjust" htmlFor="userId">
                                <span className="idPwSpanAjust">Phone number, username, or email</span>
                                <input id="userId" name="email" type="text" className="pexuQ" required value={email} onChange={onChange} />
                            </label>
                            {/* <!-- <div className="pwShow"></div> --> */}
                        </div>
                    </div>
                    <div className="idPwSize">
                        {/* <!-- password글자 백그라운드 색상지정 --> */}
                        <div className="idPwInputAjust">
                            {/* <!-- password글자 인풋박스 왼쪽으로 옮기기  --> */}
                            <label className="idPwLabelAjust" htmlFor="key">
                                {/* <!-- password글자 인풋박스 안으로 넣기 --> */}
                                <span className="pwSpanAjust">Password</span>
                                <input id="key" name="password" type="password" className="pexuQ" required value={password} onChange={onChange} />    
                            </label>
                            <div className="pwShow">
                                <div id="keyShow">Show</div>
                                <button id="checkKey" className="buttonAjust showLoginFbButton" type="button"></button>
                            </div>    
                        </div>
                    </div>

                    <div className="loginAndFbLoginPosition">
                        <button className="buttonAjust loginButtonFont buttonActive" id="loginButton" type="submit" disabled>
                            <div className="">Log In</div>
                        </button>
                    </div>

                    <div className="orLine">
                        <div className="bothSideLines"></div>
                        <div className="orWords">or</div>
                        <div className="bothSideLines"></div>
                    </div>

                    <div className="loginAndFbLoginPosition">
                        <button className="buttonAjust showLoginFbButton loginButton" onClick={onSocialClick} name="facebook">
                            <span className="loginWithFb fbIcon combinedImages"></span>
                            <span className="loginWFbFont">Log in with Facebook</span>
                        </button>
                    </div>
                </div>
                {/* <!-- incorrectInfo Alert--> */}
                <div className="incorrectInfo">
                    <p aria-atomic="true" data-testid="login-error-message" id="incorrectInfoAlert" role="alert">
                        {error}{/* Sorry, your password was incorrect. Please double-check your password. */}
                    </p>
                </div>
                {/* <!-- Forgot password--> */}
                <a className="forgotPw" href="https://www.instagram.com/accounts/password/reset/"> Forgot password?</a>
            </form>
        </div>
    </div>
    {/* <!-- sign up div white effect --> */}
    <div className="loginSignBgColor">
        <div className="fontColor">
            <p className="signUpBorderSize">
                Don't have an account?
                <a data-testid="sign-up-link" href="naver.com" tabIndex="0">
                    <span className="signFont"><strong>Sign up</strong></span>
                </a>
            </p>
        </div>
    </div>
    </>
    );
};
export default Auth;
