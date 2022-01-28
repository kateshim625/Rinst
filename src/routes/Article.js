import React from "react";
import Auth from "./Auth";

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
                    <Auth />
                    <div className="">
                        <p className="getAppP">Get the app.</p>
                        <div className="getAppDownload">
                            <a className="appDownloadDistance" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
                                <img src={require("images/appStore.png")} alt="Available on the App Store" className="appDownloadImg" />
                            </a>
                            <a className="appDownloadDistance" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DF6DF35A4-F904-44EA-BF2C-CB381B3134F0%26utm_content%3Dlo%26utm_medium%3Dbadge">
                                <img src={require("images/googlePlay.png")} alt="Available on Google Play" className="appDownloadImg" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    );
};

export default Article;