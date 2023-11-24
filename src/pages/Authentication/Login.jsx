import React from "react";
import SideBar from "../../components/SideBar";

function Login() {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="basis-1/4 bg-white-300 h-[100dvh] ">
          <SideBar />
        </div>
        <div className="basis-3/4 bg-violet-100 p-3  min-h-screen	"></div>
      </div>
    </div>
  );
}

export default Login;
