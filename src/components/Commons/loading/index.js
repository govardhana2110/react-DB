import React from "react";
import Loading from "./loading.gif";

const IRELogo = ({title}) => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        {title && <div>{title}</div>}
        <img
          style={{ width: "auto",height:'25px',}}
          alt="Loading.."
          src={Loading}
        />
    </div>
  );
};

export default IRELogo;