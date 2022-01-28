import React from "react";

const Footer = () => {
    return (
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
    );
};

export default Footer;