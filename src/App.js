
// import React, { useState, useEffect } from "react";
import Footer from "routes/Footer";
// import Login from "routes/Login";
import AppRouter from "components/Router";
// import { authService } from "fbase";

function App() {
  // const [init, setInit] = useState(false);
  // const [userObj, setUserObj] = useState(null);
  // useEffect(() => {
  //   authService.onAuthStateChanged((user) => {
  //     if(user) {
  //       setUserObj({
  //         displayName: user.displayName,
  //         uid: user.uid,
  //         updateProfile: (args) => user.updateProfile(args),
  //       });
  //     } else {
  //       setUserObj(null)
  //     }
  //     setInit(true);
  //   });
  // }, []);
  // const refreshUser = () => {
  //   const user = authService.currentUser;
  //   setUserObj({
  //     displayName: user.displayName,
  //     uid: user.uid,
  //     updateProfile: (args) => user.updateProfile(args),
  //   });
  // };

  return (
    <>
    <AppRouter />
    {/* {init ? (
      <AppRouter 
      refreshUser={refreshUser}
      isLoggedIn={Boolean(userObj)} 
      userObj={userObj} 
      />
    ) : (
      "Initializing..."
    )} */}
    <Footer />
    </>
  );
}

export default App;
