import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Auth from "routes/Auth";
// import Home from "routes/Home";
// import Profile from "routes/Profile";
// import Navigation from "components/Navigation";
import Login from "routes/Login";
import Main from "routes/main";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
        <Router>
            {/* {isLoggedIn && <Navigation userObj={userObj} />} */}
            <Switch>
                <Route exact path="/main">
                    <Main />
                </Route>
                <Route exact path="/">
                    <Login />
                </Route>

                {/* {isLoggedIn ? (
                <>
                    <Route exact path="/main">
                        <Main />
                    </Route>
                </>
                ) : (
                <>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </>
                )} */}
            </Switch>
        </Router>
    )
}

export default AppRouter;
