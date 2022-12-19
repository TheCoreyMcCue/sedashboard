import React from "react";

import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";

import logo from "../../assets/Ekata-Mastercard-Reverse.svg";
import shareVideo from "../../assets/login_vid.mp4";
import { useDispatch } from "react-redux";

import { setLoggedIn, setLoggedUser } from "state";
import { client } from "../../client";
import { gapi } from "gapi-script";

const Login = () => {
  const dispatch = useDispatch();

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: "*****.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });
  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    const { email, name, googleId, imageUrl, familyName, givenName } =
      response?.profileObj;
    response.accessToken &&
      dispatch(setLoggedIn()) &&
      dispatch(setLoggedUser(response?.profileObj));
    const doc = {
      _id: googleId,
      _type: "user",
      id: googleId,
      userName: name,
      email: email,
      image: imageUrl,
      firstName: givenName,
      lastName: familyName,
    };
    client.createIfNotExists(doc);
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          <div className="p-1">
            <img src={logo} alt="" width="130px" />
          </div>
          <div className="p-5 text-xl">
            <h1>Sales Engineer Dashboard</h1>
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              clientSecret={`${process.env.REACT_APP_GOOGLE_API_SECRET}`}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-grey flex justify-center items-center p-2 rounded-lg cursor-pointer outline"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
