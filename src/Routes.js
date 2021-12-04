import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import Home from './pages'

const Routes = () => {
  useEffect(() => {
    console.log("Mounting routes")
    const cookies = new Cookies();
    console.log(cookies)
    // const user = cookies.get("user")

    // if (user === null) {
    //   console.log("User not found, redirecting to /login...")
    //   window.top.location = `${config.BASE_URL}/login`
    // }
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} />;
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;
