
import React, { useEffect, useState } from "react";
// import Login from "routes/Login";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
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
    {init ? (<AppRouter isLoggedIn={isLoggedIn} />) : ("Initializing...")}
    
    {/* {init ? (
      <AppRouter 
      refreshUser={refreshUser}
      isLoggedIn={Boolean(userObj)} 
      userObj={userObj} 
      />
    ) : (
      "Initializing..."
    )} */}
 
    </>
  );
}

export default App;
