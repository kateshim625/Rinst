import React from "react";

const Article = () => {

    return (
        <article className="mainPhotoLayout">
            <div className="mainCenter borderCenter" style={{ minWeight: '100%' }}>
                {/* <!-- main phone instagram app picture --> */}
                <div className="mainPhotoImg">
                    <div className="movePicPosition">
                        {/* <!-- <img alt="" className="sizeMovePic" src="images/4.jpg"> --> */}
                        <p className="sizeMovePic"></p>
                    </div>
                </div>
                {/* <!-- login & join --> */}
                <div className="loginPosition">
                    <div className="loginSignBgColor">
                        <h1 className="logoSize instagramLogoBgPosition combinedImages">img</h1>
                        <div className="loginInputSize">
                            <form className="formSection" id="loginForm" method="post">
                                <div className="mainFootTopAjust">
                                    <div className="idPwSize">
                                        <div className="idPwInputAjust">
                                            <label className="idPwLabelAjust" htmlFor="userId">
                                                <span className="idPwSpanAjust">Phone number, username, or email</span>
                                                <input id="userId" name="username" type="text" className="pexuQ" />
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
                                                <input id="key" name="password" type="password" className="pexuQ" />    
                                            </label>
                                            <div className="pwShow">
                                                <div id="keyShow">Show</div>
                                                <button id="checkKey" className="buttonAjust showLoginFbButton" type="button"></button>
                                            </div>    
                                        </div>
                                    </div>
                
                                    {/* <!-- 
                                    <input autocomplete="false" type="password" id="key" />
                                    <div id="keyShow">SHOW</div>
                                    <button id="checkKey"> Submit </button>
                                    
                                    <br />
                                    비번을 입력을 시작하면 버튼이 나옵니다. --> */}

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
                                        <button className="buttonAjust showLoginFbButton loginButton" type="button">
                                            <span className="loginWithFb fbIcon combinedImages"></span>
                                            <span className="loginWFbFont">Log in with Facebook</span>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- incorrectInfo Alert--> */}
                                <div className="incorrectInfo">
                                    <p aria-atomic="true" data-testid="login-error-message" id="incorrectInfoAlert" role="alert">
                                        Sorry, your password was incorrect. Please double-check your password.
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
                    <div className="">
                        <p className="getAppP">Get the app.</p>
                        <div className="getAppDownload">
                            <a className="appDownloadDistance" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
                                <img src="images/appStore.png" alt="Available on the App Store" className="appDownloadImg" />
                            </a>
                            <a className="appDownloadDistance" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DF6DF35A4-F904-44EA-BF2C-CB381B3134F0%26utm_content%3Dlo%26utm_medium%3Dbadge">
                                <img src="images/googlePlay.png" alt="Available on Google Play" className="appDownloadImg" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    );
};

export default Article;