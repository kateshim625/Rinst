import React from "react";
import "../main.css"

const Main = () => {
    return (
        <div id="container">
        <div>
            <header>
                <nav className="">
                    <div className="main-nav">
                        <ul className="headerNav">
                            {/* <!-- logo --> */}
                            <li className="logoLi">
                                <a href="main.html"><img src={require('../images/mainImages/instagramLogo.png')} alt="logo" /></a>
                            </li>
                            <li className="searchLi">
                                {/* <!-- search --> */}
                                <i className="fas fa-search searchIconHide"></i>
                                <input className="searchBarInput" type="text" placeholder="search" />
                                <span className="searchClear clearBtn">
                                    <button type="button" className="">clear</button>
                                </span>
                                {/* <!-- search Bar: https://hell-of-company-builder.tistory.com/42 --> */}
                                {/* <!--samples https://freefrontend.com/css-search-boxes/ --> */}
                            </li>

                            <li className="iconsLi">
                                {/* <!-- icons --> */}
                                <div className="iconsDiv">
                                    <span>
                                        <i className="fas fa-home"></i>
                                    </span>
                                    <span>
                                        <i className="far fa-paper-plane"></i>
                                    </span>
                                    <span>
                                        <i className="far fa-plus-square"></i>
                                    </span>
                                    <span>
                                        <i className="far fa-compass"></i>
                                    </span>
                                    <span>
                                        <i className="far fa-heart"></i>
                                    </span>
                                    {/* <!-- me --> */}
                                    <span className="">   
                                        <img className="myPic" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                    </span>
                                </div>
                                
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
        
        {/* <!-- main --> */}
        <div className="mainDives">
            <div className="contentsPosition1">
                <section>
                    <div>
                        {/* <!-- friend's stories --> */}
                        <div className="mainTop">
                            
                            <div className="friendStroies">
                                {/* <!-- friend story  --> */}
                                <div className="storyBar">
                                    {/* <!-- 
                                        자바스크립트에서 style.color 등으로 들어가서 속성을 부여하는 건 가능한데! 
                                        그건 html 태그에 inline style로 지정하게 되는 것. 
                                        그래서 애초에 storySpan.style.right은 undefined인데 if(right < 795), 
                                        if(right > 0) 등으로 undefined랑 숫자를 비교하려고 하니까 false가 되고 if문에서 통과가 안 된 거였다.
                                        그래서 생각해낸 두 가지 해결 방법!
                                        1. html에서 storyBox 태그에 인라인으로 style="right: 0px"을 삽입한다.
                                     --> */}
                                    <div className="friendStroyBar" id="friendStroyBar" style={{ right: '0px' }}>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
    
                                        {/* <!-- friend story test copies started --> */}
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/6.png')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/6.png')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/6.png')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        <div className="friendStory">
                                            <div className="friendNamePic">
                                                <a href="naver.com">
                                                    <img className="storyPicBorder" src={require('../images/mainImages/pictureBorder.png')} alt="" />
                                                </a>
                                                <a href="naver.com">
                                                    <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                                </a>
                                                <div className="dashboard"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            </div>
                                        </div>
                                        
                                        {/* <!-- friend story test copies end --> */}
    
                                    </div>
                                </div>

                                <div className="sotryBtn">
                                    {/* <!-- button before --> */}
                                    <div className="before">
                                        <button type="button" id="storyMB" className="storyMoveBefore">
                                            before
                                        </button>
                                        {/* <!-- 버튼 다른 태태그그와 겹겹치치기 : https://heinafantasy.com/62   --> */}
                                    </div> 
                                    {/* <!-- button after --> */}
                                    <div className="next">
                                        <button type="button" id="storyMN" className="storyMoveNext">
                                            after
                                        </button>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        {/* <!-- post --> */}
                        <div className="peoplePost">
                            <div className="userNamePhoto">
                                <div className="friendInfo">
                                    <span className="storyPicBorder postPicBorder"><a href="naver.com">blank</a></span>
                                    <span>
                                        <a href="naver.com"><img className="postPic" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" /></a>
                                    </span>
                                    <span className="postInfo">
                                        <div className=""><a href="naver.com" className="boldStyle noUnderline">Hyoung0987</a></div>
                                        <div><a href="naver.com" className="noUnderline">Busan, Korea</a></div>
                                    </span>
                                    <span className="postMore">
                                        <a href="naver.com">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </a>
                                    </span>
                                </div>

                            </div>
                            <div className="postPicPosition">
                                {/* <!-- or --> */}
                                

                                {/* <!-- 여러장 --> */}
                                <div className="mainPics">
                                    <img id="post1" className="picSize active" src={require('../images/mainImages/pic1.png')} alt="" />
                                    {/* <!-- 소리 줄이고 키기 --> */}
                                    <video id="post2" className="picSize" width="100%" controls>
                                        <source src={require('../images/mainImages/exaple1.mp4')} type="video/mp4" />
                                    </video>
                                    {/* <!-- https://www.codingfactory.net/11877 --> */}
                                    <img id="post3" className="picSize" src={require('../images/mainImages/5.jpeg')} alt="" />
                                </div>
                                {/* <!-- 슬라이드참고 https://codepen.io/Coding-Artist/pen/RwKvbOe --> */}
                                <div className="dotsMoveColor" style={{ textAlign: 'center' }}>
                                    <span className="dot colorActive"></span> 
                                    <span className="dot"></span> 
                                    <span className="dot"></span> 
                                </div>

                                <div className="">
                                    {/* <!-- button before --> */}
                                    <div className="postBefore">
                                        <button type="button" onClick="postBeforeBtn" className="postMoveBefore">
                                            before
                                        </button>
                                        {/* <!-- 버튼 다른 태태그그와 겹겹치치기 : https://heinafantasy.com/62   --> */}
                                    </div> 
                                    {/* <!-- button after --> */}
                                    <div className="postNext">
                                        <button type="button" onClick="postNextBtn" className="postMoveNext">
                                            after
                                        </button>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- 하트 / 댓글 / 쪽지 / pages / 저장 --> */}
                            <div className="postActions">
                                {/* <!-- 하트/ 댓글/ 쪽지 --> */}
                                <div className="postsReaction">
                                    {/* <!--  like icon --> */}
                                    <span>
                                        <i onClick="liked" id="likedBtn" className="far fa-heart"></i>
                                        {/* <!-- 참고: https://www.youtube.com/watch?v=rEXfjA0FkdU --> */}
                                        {/* <!-- clolors:  https://www.materialpalette.com/colors --> */}
                                    </span>
                                    {/* <!--  comments icon --> */}
                                    <span>
                                        <i className="far fa-comment"></i>
                                    </span>
                                    {/* <!--  send message icon --> */}
                                    <span>
                                        <i className="far fa-paper-plane"></i>
                                    </span>
                                    {/* <!--  save icon --> */}
                                    <span className="saveBtn">
                                        <i className="far fa-bookmark"></i>
                                    </span>
                                </div>
                                
                            </div>
                            <div className="bottomPost">
                                {/* <!-- someone who liked --> */}
                                <div className="">
                                    <span>
                                        <img className="whoLiked" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="UserPicter" />
                                    </span>
                                    <span>Liked by <b className="boldStyle"><a href="naver.com" className="noUnderlineColor">takealook_friends</a></b> and <b className="peopleWliked">3</b> others</span>
                                </div>
                                 
                                
                                {/* <!-- writer & contents --> */}
                                <div className="articleDiv">
                                    <span className="articleSpan boldStyle"><a href="naver.com" className="noUnderlineColor">Hyoung0987</a></span>
                                    <span id="article" className="postContents">The contents were more detailed than I thought which I realized that was kind of nonsense to me!</span>
                                    {/* <!-- 참고해보기 : https://violideo.blogspot.com/2019/11/blog-post_18.html --> */}
                                    <span className=""><button type="button" className="feed__article-more-button">more</button></span>
                                </div>
                                <div className="viewAllComments"><p>View all <b className="commentCount">0</b> comments</p></div>
                                {/* <!-- comments --> */}
                                <div className="userComment">
                                    <span className="userCommentsList">
                                        {/* <!-- <span>HyShim0987 </span>
                                        <span>contents was pretty good then I thought which I re...  </span>
                                        <span>
                                            <button type="button">more</button>
                                        </span>
                                        <span>
                                            <a href="naver.com"><i className="fa fa-heart-o"></i>
                                            </a>
                                        </span> --> */}
                                    </span>
                                    
                                </div>
                                {/* <!-- posted time  --> */}
                                <div className="regTime">
                                    <span>24 HOURS AGO</span>
                                </div>
                                
                            </div>
                            {/* <!-- add comments --> */}
                            <div className="addComments">
                                <div className="commentBorder">
                                    <form action="">
                                        <span>
                                            <span className="commentIcon">
                                                <i className="far fa-smile"></i>
                                            </span>
                                            <span className="addComms">
                                                <label htmlFor="commentInput"></label>
                                                <input className="commentInput" type="text" id="commentInput" placeholder="Add a comment" />
                                            </span>
                                        </span>
                                        <span className="postBtn">
                                            {/* <!-- form에서 타입을 버튼으로 주면 새로고핌됨 submit으로해놓고 이벤트 발생 금지시킴 --> */}
                                            <button type="" className="addSubmit addSumitActive" disabled>Post</button>
                                        </span>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>



            <div className="secondTop">
                <div className="sideMargin">
                    <aside className="">
                        {/* <!-- my info --> */}
                        <div>
                            <div className="">
                                {/* <!-- friend story  --> */}
                                <div className="">
                                    <div className="myAccounts">
                                        <span>
                                            <div className="storyPicBorder"></div>
                                            <a href="naver.com">
                                                <img className="storyPicSwich" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" />
                                            </a>
                                        </span>
                                        <span className="myAccountId">
                                            <div className="boldStyle"><a href="naver.com" className="noUnderline">Hyoung0987</a></div>
                                            <div>HY</div>
                                        </span>
                                        <span>
                                            <div className="accountSwitchBtn boldStyle">
                                                <button type="button">Switch</button>
                                            </div>
                                        </span>
                                        
                                    </div>
                                </div>        

                            </div>
                        </div>
                        {/* <!-- friends Suggestions --> */}
                        <div className="suggestions">
                            <span className="suggestionsLengh boldStyle">Suggestions For You</span>
                            <span><button className="suggestionBtn boldStyle">See All</button></span>
                        </div>
                        {/* <!-- friends Suggestions list --> */}
                        <div className="suggestNamePhoto">
                            <div className="suggestInfo">
                                <span className="storyPicBorder"></span>
                                <span>
                                    <a href="naver.com"><img className="postPic" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" /></a>
                                </span>
                                <span className="suggestInfo">
                                    <div className="suggestInfoSize">
                                        <span>
                                            <p className="boldStyle"><a href="naver.com" className="noUnderlineColor">Hyoung0987</a></p>
                                        </span>
                                        <span className="suggestMore">
                                            <p className="followByInfo dashboard">Follows you</p>
                                            <p className="followByMoreBtn">more</p>
                                        </span>
                                    </div>
                                    {/* <!-- Follows you / New to Instagram --> */}
                                </span>
                                <span className="suggestFollowBtn boldStyle">
                                    <button>Follow</button>
                                </span>
                            </div>
                        </div>






                        {/* <!-- friends Suggestions list test copies start --> */}

                        <div className="suggestNamePhoto">
                            <div className="suggestInfo">
                                <span className="storyPicBorder"></span>
                                <span>
                                    <a href="naver.com"><img className="postPic" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" /></a>
                                </span>
                                <span className="suggestInfo">
                                    <div className="suggestInfoSize">
                                        <span>
                                            <p className="boldStyle"><a href="naver.com" className="noUnderlineColor">Hyoung0987</a></p>
                                        </span>
                                        <span className="suggestMore">
                                            <p className="followByInfo dashboard">Followed by Lonash</p>
                                            <p className="followByMoreBtn">more</p>
                                        </span>
                                    </div>
                                    {/* <!-- Follows you / New to Instagram --> */}
                                </span>
                                <span className="suggestFollowBtn boldStyle">
                                    <button>Follow</button>
                                </span>
                            </div>
                        </div>
                        <div className="suggestNamePhoto">
                            <div className="suggestInfo">
                                <span className="storyPicBorder"></span>
                                <span>
                                    <a href="naver.com"><img className="postPic" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" /></a>
                                </span>
                                <span className="suggestInfo">
                                    <div className="suggestInfoSize">
                                        <span>
                                            <p className="boldStyle"><a href="naver.com" className="noUnderlineColor">Hyoung0987</a></p>
                                        </span>
                                        <span className="suggestMore">
                                            <p className="followByInfo dashboard">Suggested for you</p>
                                            <p className="followByMoreBtn">more</p>
                                        </span>
                                    </div>
                                    {/* <!-- Follows you / New to Instagram --> */}
                                </span>
                                <span className="suggestFollowBtn boldStyle">
                                    <button>Follow</button>
                                </span>
                            </div>
                        </div>
                        <div className="suggestNamePhoto">
                            <div className="suggestInfo">
                                <span className="storyPicBorder"></span>
                                <span>
                                    <a href="naver.com"><img className="postPic" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" /></a>
                                </span>
                                <span className="suggestInfo">
                                    <div className="suggestInfoSize">
                                        <span>
                                            <p className="boldStyle"><a href="naver.com" className="noUnderlineColor">Hyoung0987</a></p>
                                        </span>
                                        <span className="suggestMore">
                                            <p className="followByInfo dashboard">Followed by cloudMemories</p>
                                            <p className="followByMoreBtn">more</p>
                                        </span>
                                    </div>
                                    {/* <!-- Follows you / New to Instagram --> */}
                                </span>
                                <span className="suggestFollowBtn boldStyle">
                                    <button>Follow</button>
                                </span>
                            </div>
                        </div>
                        <div className="suggestNamePhoto">
                            <div className="suggestInfo">
                                <span className="storyPicBorder"></span>
                                <span>
                                    <a href="naver.com"><img className="postPic" src={require('../images/mainImages/baseProfilePic.jpeg')} alt="" /></a>
                                </span>
                                <span className="suggestInfo">
                                    <div className="suggestInfoSize">
                                        <span>
                                            <p className="boldStyle"><a href="naver.com" className="noUnderlineColor">Hyoung0987</a></p>
                                        </span>
                                        <span className="suggestMore">
                                            <p id="followFriendsMore" className="followByInfo dashboard">Followed by hinterjin + <b className="friendsFollowBys">3</b>  </p>
                                            <p className="followByMoreBtn" style={{ display: 'block' }}>more</p>
                                        </span>
                                    </div>
                                    {/* <!-- Follows you / New to Instagram --> */}
                                </span>
                                <span className="suggestFollowBtn boldStyle">
                                    <button>Follow</button>
                                </span>
                            </div>
                        </div>
                        {/* <!-- friends Suggestions list test copies end --> */}


                    </aside>
    
                    {/* <!-- footer --> */}
                    <footer className="">
                        <div className="linksSize"> 
                            <a className="links" href="naver.com">About</a>
                            <a className="links" href="naver.com">Help</a>
                            <a className="links" href="naver.com">Press</a>
                            <a className="links" href="naver.com">API</a>
                            <a className="links" href="naver.com">Jobs</a>
                            <a className="links" href="naver.com">Privacy</a>
                            <a className="links" href="naver.com">Impressum/Terms/NetzDG/UrhDaG</a>
                            <a className="links" href="naver.com">Top Accounts</a>
                            <a className="links" href="naver.com">Hashtags</a>
                            <a className="links" href="naver.com">Language</a>
                            
                              English
                        </div>
                        {/* <!-- company info --> */}
                        <div>
                            © 2022 INSTAGRAM FROM META
                        </div>
                    </footer>
                </div>
                
            </div>
            
        </div>
        
    </div>
    );
};

export default Main;
