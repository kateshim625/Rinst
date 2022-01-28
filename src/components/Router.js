import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "routes/Footer";
// import Auth from "routes/Auth";
// import Home from "routes/Home";
// import Profile from "routes/Profile";
// import Navigation from "components/Navigation";
import Login from "routes/Login";
import Main from "routes/Main";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            {/* {isLoggedIn && <Navigation userObj={userObj} />} */}
            <Switch>
                {isLoggedIn ? (
                <>
                    <Route exact path="/">
                        <Main />
                    </Route>
                </>
                ) : (
                <>
                    <Route exact path="/">
                        <Login />
                        <Footer />
                    </Route>
                </>
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter;
