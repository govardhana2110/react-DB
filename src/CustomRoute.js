import React from "react";
import { Redirect, Route, Routes, withRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { useLocation } from "react-router-dom";

const withLocation = Component => props => {
  const location = useLocation();

  return <Component {...props} location={location} />;
};

const MyRoute = ({ element: ComponentToRender, ...rest }) => {
  console.log("component", ComponentToRender)
  return (
    <MainLayout>
      <Routes>
        <Route
          {...rest}
          render={(props) =>
            true ? (
              // <MainLayout>
              <ComponentToRender {...props} />
              //  {/* </MainLayout> */}
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                }}
              />
            )
          }
        />
      </Routes>
    </MainLayout>
  );
};

export default withLocation(MyRoute);
