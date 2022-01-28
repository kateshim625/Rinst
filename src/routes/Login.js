import "login.css"

const Login = () => {
    return (

    <div id="container">
        <section className="sectionEntirePart">
            <div></div>
            <main className="fillBgColor mainBgColor" role="main">
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
            </main>
        
            <footer className="footPosition footerBgColor" role="contentinfo">
                <div className="footerButtom">
                    <div className="mainFootTopAjust">
                        <div className="mainCenter linksAotoAlignment">
                            <div className="footerLinks">
                                <a href="https://about.facebook.com/meta" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="footerFont fontColor">Meta</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="https://about.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="footerFont fontColor">About</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="https://about.instagram.com/blog/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="footerFont fontColor">Blog</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="/about/jobs/">
                                    <div className="footerFont fontColor">Jobs</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className=" footerFont fontColor">Help</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="https://developers.facebook.com/docs/instagram" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="footerFont fontColor">API</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="/legal/privacy/">
                                    <div className="footerFont fontColor">Privacy</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="/legal/terms/">
                                <div className="footerFont fontColor">Impressum/Terms/NetzDG/UrhDaG</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="/directory/profiles/">
                                    <div className="footerFont fontColor">Top Accounts</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="/directory/hashtags/">
                                    <div className="footerFont fontColor">Hashtags</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="/explore/locations/">
                                    <div className="footerFont fontColor ">Locations</div>
                                </a>
                            </div>
                            <div className="footerLinks ">
                                <a href="/web/lite/">
                                    <div className="footerFont fontColor ">Instagram Lite</div>
                                </a>
                            </div>
                        </div>

                        <div className="mainCenter linksAotoAlignment">
                            <div className="footerLinks">
                                <a href="/topics/beauty/">
                                    <div className="footerFont fontColor">Beauty</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="/topics/dance-and-performance/">
                                    <div className="footerFont fontColor">Dance</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="/topics/fitness/">
                                    <div className="footerFont fontColor ">Fitness</div>
                                </a>
                            </div>
                            
                            <div className="footerLinks">
                                <a href="/topics/food-and-drink/">
                                <div className="footerFont fontColor">Food &amp; Drink</div>
                            </a>
                            </div>
                            <div className="footerLinks">
                                <a href="/topics/home-and-garden/">
                                    <div className="footerFont fontColor">Home &amp; Garden</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="/topics/music/">
                                    <div className="footerFont fontColor">Music</div>
                                </a>
                            </div>
                            <div className="footerLinks">
                                <a href="/topics/visual-arts/">
                                    <div className="footerFont fontColor">Visual Arts</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- language & comanpy name --> */}
                    <div className="mainCenter langAcomapny">
                        <div className="footerFont">
                            <span className="languageFontColor">
                                <div className="moreLanugePosition">
                                    <span>English</span>
                                    <div className="">
                                        <span style={{display: 'inlineBlock', transform: 'rotate(180deg)' }}>
                                            <svg aria-label="Down Chevron Icon" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12">
                                                <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <select aria-label="Switch Display Language" className="showOptionList">
                                    <option value="af">Afrikaans</option>
                                    <option value="cs">Čeština</option>
                                    <option value="da">Dansk</option>
                                    <option value="de">Deutsch</option>
                                    <option value="el">Ελληνικά</option>
                                    <option value="en">English</option>
                                    <option value="en-gb">English (UK)</option>
                                    <option value="es">Español (España)</option>
                                    <option value="es-la">Español</option>
                                    <option value="fi">Suomi</option>
                                    <option value="fr">Français</option>
                                    <option value="id">Bahasa Indonesia</option>
                                    <option value="it">Italiano</option>
                                    <option value="ja">日本語</option>
                                    <option value="ko">한국어</option>
                                    <option value="ms">Bahasa Melayu</option>
                                    <option value="nb">Norsk</option>
                                    <option value="nl">Nederlands</option>
                                    <option value="pl">Polski</option>
                                    <option value="pt-br">Português (Brasil)</option>
                                    <option value="pt">Português (Portugal)</option>
                                    <option value="ru">Русский</option>
                                    <option value="sv">Svenska</option>
                                    <option value="th">ภาษาไทย</option>
                                    <option value="tl">Filipino</option>
                                    <option value="tr">Türkçe</option>
                                    <option value="zh-cn">中文(简体)</option>
                                    <option value="zh-tw">中文(台灣)</option>
                                    <option value="bn">বাংলা</option>
                                    <option value="gu">ગુજરાતી</option>
                                    <option value="hi">हिन्दी</option>
                                    <option value="hr">Hrvatski</option>
                                    <option value="hu">Magyar</option>
                                    <option value="kn">ಕನ್ನಡ</option>
                                    <option value="ml">മലയാളം</option>
                                    <option value="mr">मराठी</option>
                                    <option value="ne">नेपाली</option>
                                    <option value="pa">ਪੰਜਾਬੀ</option>
                                    <option value="si">සිංහල</option>
                                    <option value="sk">Slovenčina</option>
                                    <option value="ta">தமிழ்</option>
                                    <option value="te">తెలుగు</option>
                                    <option value="vi">Tiếng Việt</option>
                                    <option value="zh-hk">中文(香港)</option>
                                    <option value="bg">Български</option>
                                    <option value="fr-ca">Français (Canada)</option>
                                    <option value="ro">Română</option>
                                    <option value="sr">Српски</option>
                                    <option value="uk">Українська</option>
                                </select>
                            </span>
                        </div>
                        <div className="langeAcompDistance">
                            <div className="footerFont fontColor">© 2022 Instagram from Meta</div>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </section>
    </div>

    );
};

export default Login;